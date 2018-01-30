const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoibHVrc3RhIiwiYSI6ImNqZDF1OXZxaDJwY2cycm5zYXFqbmljaGgifQ.0Wu5IOLUGzoiC-NTZM34ZQ";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/light-v9" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.6354, 41.8885] for Chicago



// Restaurant Markers

document.getElementById("fourPoints").addEventListener("click", function() {
    const fourPoints = buildMarker("hotel", [-74.006202, 40.708382]); // or [-87.6354, 41.8885]
    fourPoints.addTo(map);
});

document.getElementById("hilton").addEventListener("click", function() {
    const hilton = buildMarker("hotel", [-74.010210, 40.712243]); // or [-87.6354, 41.8885]
    hilton.addTo(map);
});

document.getElementById("marriott").addEventListener("click", function() {
    const marriott = buildMarker("hotel", [-74.014560, 40.710511]); // or [-87.6354, 41.8885]
    marriott.addTo(map);
});

document.getElementById("conrad").addEventListener("click", function() {
    const conrad = buildMarker("hotel", [-74.015719, 40.715153]); // or [-87.6354, 41.8885]
    conrad.addTo(map);
});
s