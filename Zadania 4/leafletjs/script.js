var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.51, -0.09]).addTo(map);
var marker2 = L.marker([51.5, -0.10]).addTo(map);
var marker3 = L.marker([51.49, -0.09]).addTo(map);

marker.bindPopup("<button class=\"popup\">Click me :)</button>").openPopup();

var circle = L.circle([51.508, -0.11], {
  fillColor: "yellow",
  color: "red",
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

circle.on("mouseover", function (e) {
  this.setStyle({
      fillColor: "blue",
      color: "yellow"
  });
});
 
circle.on("mouseout", function (e) {
  this.setStyle({
    fillColor: "yellow",
    color: "red"
  });
});

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
], {
  fillColor: "yellow",
  color: "red"
}).addTo(map);

polygon.on("mouseover", function (e) {
  this.setStyle({
      fillColor: "blue",
      color: "yellow"
  });
});
 
polygon.on("mouseout", function (e) {
  this.setStyle({
    fillColor: "yellow",
    color: "red"
  });
});

function copyToClipboard(e) {
  navigator.clipboard.writeText(e.latlng)
  alert(`Copied coord.: ${e.latlng} to clipboard!`);
}
 
map.on("click", copyToClipboard);