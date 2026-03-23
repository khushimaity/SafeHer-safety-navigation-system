import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Search, Sun, Moon } from "lucide-react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";
import "./SafeMap.css";

function SafeMap() {
  const [mode, setMode] = useState("night");
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("safe");
  const [review, setReview] = useState("");
  const [file, setFile] = useState(null);
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [incidents, setIncidents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [routeSafety, setRouteSafety] = useState("safe");
  const [routePath, setRoutePath] = useState([]);
  const [allRoutes, setAllRoutes] = useState([]);
  const [routeIncidentCount, setRouteIncidentCount] = useState(0);
  const [safeIncidentCount, setSafeIncidentCount] = useState(0);
  const [moderateIncidentCount, setModerateIncidentCount] = useState(0);
  const [unsafeIncidentCount, setUnsafeIncidentCount] = useState(0);
  const [safestRouteIndex, setSafestRouteIndex] = useState(0);
  const [routeRenderKey, setRouteRenderKey] = useState(0);
  


  const areas = [
    { name: "Downtown", score: 85, crowd: "High", lighting: "Excellent", alerts: 2 },
    { name: "University District", score: 92, crowd: "Medium", lighting: "Good", alerts: 0 },
    { name: "Park Avenue", score: 65, crowd: "Low", lighting: "Poor", alerts: 5 },
    { name: "Shopping Center", score: 88, crowd: "High", lighting: "Excellent", alerts: 1 },
    { name: "Residential Area", score: 78, crowd: "Medium", lighting: "Good", alerts: 3 },
  ];


  const countNearbyIncidents = (routeCoords, incidents) => {
  let count = 0;

  routeCoords.forEach((point) => {
    incidents.forEach((incident) => {
      const lat = incident.location ? incident.location.lat : incident.lat;
      const lng = incident.location ? incident.location.lng : incident.lng;

      const distance =
        Math.sqrt(
          Math.pow(point.lat - lat, 2) +
          Math.pow(point.lng - lng, 2)
        );

      if (distance < 0.005) {
        count++;
      }
    });
  });

  return count;
};

  // 📍 Auto user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setPosition({ lat, lng });

        // Reverse Geocoding
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        setAddress(data.display_name);
      });
    }
  }, []);

  useEffect(() => {
  const fetchIncidents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/incidents");
      const data = await res.json();
      console.log("Incidents:", data); // check here
      setIncidents(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  fetchIncidents();
  const interval = setInterval(fetchIncidents, 5000);
return () => clearInterval(interval);
}, []);


useEffect(() => {
  const fetchLocations = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/locations");
      const data = await res.json();
      console.log("Kerala dataset locations:", data);
      setLocations(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  fetchLocations();
}, []);




  // 🚗 Route calculation
 const calculateRoute = async () => {
  if (!destination || !position) return;

  setAllRoutes([]);
setRoutePath([]);
setSafestRouteIndex(0);
setRouteIncidentCount(0);
setRouteRenderKey((prev) => prev + 1);


  try {
    // convert destination to coordinates using Nominatim
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
    );
    const geoData = await geoRes.json();

    if (!geoData.length) {
      alert("Destination not found");
      return;
    }

    const destLat = geoData[0].lat;
    const destLng = geoData[0].lon;

    // request route from OSRM (FREE routing engine)
    const routeRes = await fetch(
     `https://router.project-osrm.org/route/v1/walking/${position.lng},${position.lat};${destLng},${destLat}?overview=full&geometries=geojson&alternatives=true`
    );

    const routeData = await routeRes.json();

    const routes = routeData.routes.map((route) =>
  route.geometry.coordinates.map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }))
);

setAllRoutes(routes);
console.log("All route paths:", routes);

let minIncidents = Infinity;
let safestIndex = 0;

routes.forEach((route, i) => {
  const count = countNearbyIncidents(route, incidents);
  console.log("Route", i, "incident count:", count);

  if (count < minIncidents) {
    minIncidents = count;
    safestIndex = i;
  }
});

setSafestRouteIndex(safestIndex);

const path = routes[safestIndex];

setRoutePath(path);
calculateRouteSafety(path, incidents);

  } catch (error) {
    console.error(error);
    alert("Route error");
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!position) {
    alert("Location not available");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/incidents/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: position.lat,
        lng: position.lng,
        description: review,
        type: rating,
        media: "", // we will handle file later
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Incident reported successfully ✅");

      // clear form
      setReview("");
      setRating("safe");
      setFile(null);
    } else {
      alert("Failed to report incident ❌");
    }
  } catch (error) {
    console.error(error);
    alert("Server error ❌");
  }
};

const handleSearch = async () => {
  console.log("Search clicked");

  if (!searchLocation || !position) return;

  setAllRoutes([]);
setRoutePath([]);
setSafestRouteIndex(0);
setRouteIncidentCount(0);
setRouteRenderKey((prev) => prev + 1);

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchLocation}`
    );
    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);

      //setPosition({ lat, lng });
      setAddress(data[0].display_name);
      setDestination(data[0].display_name);

      const routeRes = await fetch(
       `https://router.project-osrm.org/route/v1/walking/${position.lng},${position.lat};${lng},${lat}?overview=full&geometries=geojson&alternatives=true`
      );
      const routeData = await routeRes.json();

     const routes = routeData.routes.map((route) =>
       route.geometry.coordinates.map((coord) => ({
       lat: coord[1],
       lng: coord[0],
      }))
     );

setAllRoutes(routes);


let minIncidents = Infinity;
let safestIndex = 0;

routes.forEach((route, i) => {
  const count = countNearbyIncidents(route, incidents);

  if (count < minIncidents) {
    minIncidents = count;
    safestIndex = i;
  }
});

setSafestRouteIndex(safestIndex);

const path = routes[safestIndex];

      setRoutePath(path);
      calculateRouteSafety(path, incidents);
    } else {
      alert("Location not found");
    }
  } catch (err) {
    console.error(err);
    alert("Error finding location");
  }
};

const calculateRouteSafety = (path, incidents) => {
  if (!path.length || !incidents.length) {
    setRouteSafety("safe");
    return;
  }

  let safeCount = 0;
let moderateCount = 0;
let unsafeCount = 0;

incidents.forEach((incident) => {
 
  const incidentLat = incident.location ? incident.location.lat : incident.lat;
  const incidentLng = incident.location ? incident.location.lng : incident.lng;

  const isNearRoute = path.some((point) => {
    const latDiff = Math.abs(point.lat - incidentLat);
    const lngDiff = Math.abs(point.lng - incidentLng);
    return latDiff < 0.002 && lngDiff < 0.002;
  });

  if (isNearRoute) {
    if (incident.type === "safe") safeCount++;
    else if (incident.type === "moderate") moderateCount++;
    else if (incident.type === "unsafe") unsafeCount++;
  }
});

const incidentCount = safeCount + moderateCount + unsafeCount;
setRouteIncidentCount(incidentCount);

setSafeIncidentCount(safeCount);
setModerateIncidentCount(moderateCount);
setUnsafeIncidentCount(unsafeCount);






  if (incidentCount >= 20) {
    setRouteSafety("unsafe");
  } else if (incidentCount >= 8) {
    setRouteSafety("moderate");
  } else {
    setRouteSafety("safe");
  }
};


  return (
    <>
      <Navbar />

      <div className="safemap-page">

        {/* HEADER */}
        <div className="safemap-header">
          <h1>Real-time Safe Map</h1>
          <p>View safety scores and alerts in your area</p>
        </div>

       {allRoutes.length > 0 && (
       <p style={{ marginTop: "10px", fontWeight: "600" }}>
       Recommended Route: Route {safestRouteIndex + 1} (Safest)
       <br />
       {routeSafety === "safe"
       ? "Safest Route is Safe"
       : routeSafety === "moderate"
       ? "Safest Route is Moderately Safe"
       : "Safest Route is Unsafe"}
        {" | "}Nearby Incident Count: {routeIncidentCount}
        {" | "}Safe: {safeIncidentCount}
        {" | "}Moderate: {moderateIncidentCount}
        {" | "}Unsafe: {unsafeIncidentCount}
       </p>
      )}


        {/* SEARCH & MODE */}
        <div className="search-section">
          <div className="search-box">
            <Search size={18} />
            <input
               placeholder="Search location..."
               value={searchLocation}
               onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button onClick={handleSearch}>
              Go
            </button>
          </div>

          <div className="mode-toggle">
            <button
              className={mode === "day" ? "active" : ""}
              onClick={() => setMode("day")}
            >
              <Sun size={16} /> Day
            </button>
            <button
              className={mode === "night" ? "active" : ""}
              onClick={() => setMode("night")}
            >
              <Moon size={16} /> Night
            </button>
          </div>
        </div>

        <div className="map-container">

          {/* LEFT SIDE */}
          <div className="map-left">

            

            {/* MAP */}
            <div className="map-placeholder">
              <LoadScript googleMapsApiKey="AIzaSyDgLQaEUeN64xwMC5Dt2Jk4J0PJUbJZHeo">
                {position && (
                  <GoogleMap
  key={routeRenderKey}
  center={position}
  zoom={15}
  mapContainerStyle={{
    width: "100%",
    height: "100%",
    borderRadius: "18px"
  }}
>
  <Marker position={position} />

  {/* 🔴 INCIDENT MARKERS */}
  {incidents.map((incident, index) => (
    <Marker
      key={index}
       position={{
          lat: incident.location ? incident.location.lat : incident.lat,
          lng: incident.location ? incident.location.lng : incident.lng,
         }}
      icon={{
        url:
          incident.type === "safe"
            ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            : incident.type === "moderate"
            ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      }}
    />
  ))}

{allRoutes[safestRouteIndex] && (
  <Polyline
    key={routeRenderKey + "-" + safestRouteIndex}
    path={allRoutes[safestRouteIndex]}
    options={{
      strokeColor: "#22c55e",
      strokeWeight: 6,
    }}
  />
)}

</GoogleMap>
                )}
              </LoadScript>
            </div>

            {/* REPORT SECTION */}
            <div className="area-list">
              <h2>Report This Area</h2>

              <form onSubmit={handleSubmit} className="report-form">
                <p><strong>Detected Address:</strong></p>
                <p style={{ marginBottom: "15px" }}>
                  {address || "Detecting location..."}
                </p>

                <label>Rate Area</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="safe">Safe</option>
                  <option value="moderate">Moderately Safe</option>
                  <option value="unsafe">Unsafe</option>
                </select>

                <label>Incident Review</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Describe incident or why area feels safe/unsafe"
                  required
                />

                <label>Attach Proof</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />

                <button type="submit" className="submit-report-btn">
                  Submit Report
                </button>
              </form>
            </div>

            {/* EXISTING SAFETY ZONES */}
            <div className="area-list">
              <h2>Nearby Safety Zones</h2>

              {areas.map((area, index) => (
                <div className="area-card" key={index}>
                  <div className="score-circle">{area.score}</div>

                  <div className="area-info">
                    <h3>{area.name}</h3>
                    <p>Crowd: {area.crowd} · Lighting: {area.lighting}</p>
                  </div>

                  {area.alerts > 0 && (
                    <div className="alert-badge">
                      {area.alerts} Alert{area.alerts > 1 ? "s" : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="map-right">
            <div className="live-updates">
              <h2>Live Updates</h2>

              <div className="update caution">
                <strong>Poor Lighting</strong>
                <p>5th Street & Main</p>
              </div>

              <div className="update danger">
                <strong>Suspicious Activity</strong>
                <p>Central Park</p>
              </div>

              <div className="update info">
                <strong>Crowded Area</strong>
                <p>Train Station</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SafeMap;