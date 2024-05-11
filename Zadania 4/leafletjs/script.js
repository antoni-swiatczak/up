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

const inputs = document.getElementsByClassName("add-input");

for (let i = 0; i < 7; i++) {
  inputs[i].addEventListener("click", () => {
    inputs[i].classList.remove("wrong-val");
  })
}

let counter = 0;

document.getElementById("add-btn").addEventListener("click", () => {
  let tab = new Array(7);
  let good = true;
  for (let i = 0; i < 7; i++) {
    switch (i) {
      case 0:
        {
          if (isNaN(inputs[0].value) || inputs[0].value.length == 0) {
            good = false;
            inputs[0].classList.add("wrong-val");
          } else {
            tab[0] = inputs[0].value;
          }
        }
        break;
      case 1:
        {
          if (isNaN(inputs[1].value) || inputs[1].value.length == 0) {
            good = false;
            inputs[1].classList.add("wrong-val");
          } else {
            tab[1] = inputs[1].value;
          }
        }
        break;
      case 2:
        {
          if (inputs[2].value.length == 0) {
            good = false;
            inputs[2].classList.add("wrong-val");
          } else {
            tab[2] = inputs[2].value;
          }
        }
        break;
      case 3:
        {
          if (inputs[3].value.length == 0) {
            good = false;
            inputs[3].classList.add("wrong-val");
          } else {
            tab[3] = inputs[3].value;
          }
        }
        break;
      case 4:
        {
          if (inputs[4].value.length == 0) {
            good = false;
            inputs[4].classList.add("wrong-val");
          } else {
            tab[4] = inputs[4].value;
          }
        }
        break;
      case 5:
        {
          if (inputs[5].value.length == 0) {
            good = false;
            inputs[5].classList.add("wrong-val");
          } else {
            tab[5] = inputs[5].value;
          }
        }
        break;
      case 6:
        {
          if (inputs[6].value.length == 0) {
            good = false;
            inputs[6].classList.add("wrong-val");
          } else {
            tab[6] = inputs[6].value;
          }
        }
        break;
    }
  }
  if (good) {
    // document.getElementById("add-form").reset();
    let m = L.marker([tab[0], tab[1]]).addTo(map);
    let p = L.popup({
      content: `
        <h3>${tab[2]}</h3>
        <button style="background-color: ${tab[5]}; color: ${tab[6]}">${tab[3]}</button>
      `,
      className: `popup${counter}`
    });
    m.bindPopup(p).openPopup();
    document.getElementsByClassName(`popup${counter}`)[0].firstChild.style.backgroundColor = `${tab[4]}`;
    document.getElementsByClassName(`popup${counter}`)[0].querySelector('.leaflet-popup-tip').style.backgroundColor = `${tab[4]}`;
    counter++;
  }
});