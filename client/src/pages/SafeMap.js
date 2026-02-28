import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Search, Sun, Moon } from "lucide-react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer
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

  const areas = [
    { name: "Downtown", score: 85, crowd: "High", lighting: "Excellent", alerts: 2 },
    { name: "University District", score: 92, crowd: "Medium", lighting: "Good", alerts: 0 },
    { name: "Park Avenue", score: 65, crowd: "Low", lighting: "Poor", alerts: 5 },
    { name: "Shopping Center", score: 88, crowd: "High", lighting: "Excellent", alerts: 1 },
    { name: "Residential Area", score: 78, crowd: "Medium", lighting: "Good", alerts: 3 },
  ];

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

  // 🚗 Route calculation
  const calculateRoute = () => {
    if (!destination || !position) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: position,
        destination: destination,
        travelMode: window.google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Area Report Submitted (Backend ready)");
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

        {/* SEARCH & MODE */}
        <div className="search-section">
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search location..." />
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

            {/* DESTINATION INPUT */}
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter destination..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                style={{
                  padding: "10px",
                  width: "70%",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />
              <button
                onClick={calculateRoute}
                style={{
                  marginLeft: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#6c2bd9",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Get Route
              </button>
            </div>

            {/* MAP */}
            <div className="map-placeholder">
              <LoadScript googleMapsApiKey="AIzaSyDgLQaEUeN64xwMC5Dt2Jk4J0PJUbJZHeo">
                {position && (
                  <GoogleMap
                    center={position}
                    zoom={15}
                    mapContainerStyle={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px"
                    }}
                  >
                    <Marker position={position} />

                    {directions && (
                      <DirectionsRenderer
                        directions={directions}
                        options={{
                          polylineOptions: {
                            strokeColor:
                              rating === "safe"
                                ? "#22c55e"
                                : rating === "moderate"
                                ? "#facc15"
                                : "#ef4444",
                            strokeWeight: 6
                          }
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