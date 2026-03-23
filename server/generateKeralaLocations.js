const fs = require("fs");

const keralaLocations = [];

for (let i = 0; i < 250; i++) {
  keralaLocations.push({
    lat: 8.5 + (Math.random() - 0.5) * 4,
    lng: 76.9 + (Math.random() - 0.5) * 4,
    type: "moderate",
    source: "public data"
  });
}

fs.writeFileSync(
  "kerala_locations.json",
  JSON.stringify(keralaLocations, null, 2)
);

console.log("Generated", keralaLocations.length, "Kerala locations");