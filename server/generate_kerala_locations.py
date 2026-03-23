import requests
import json

url = "https://overpass-api.de/api/interpreter"

query = """
[out:json][timeout:25];
area["name"="Kerala"]->.searchArea;
(
  node["highway"="traffic_signals"](area.searchArea);
  node["amenity"="bus_station"](area.searchArea);
  node["railway"="station"](area.searchArea);
  node["amenity"="marketplace"](area.searchArea);
);
out body;
"""

response = requests.post(url, data={"data": query})
data = response.json()

locations = []

for el in data["elements"][:250]:
    locations.append({
        "lat": el["lat"],
        "lng": el["lon"],
        "type": "moderate",
        "source": "OpenStreetMap"
    })

with open("kerala_locations.json", "w") as f:
    json.dump(locations, f, indent=2)

print("Generated", len(locations), "locations")