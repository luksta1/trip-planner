const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    let markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type === 'activity') {
        markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
    } else if (type === 'restaurant') {
        markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
    } else {
        markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
    }
    return new mapbox.Marker(markerDomEl).setLngLat(coords);
};


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

module.exports = buildMarker;