var infoContent = document.getElementById("infoContent");
var log = document.getElementById("mapLog");
var colorIndex = 0;
const backGourndColorContainer = ["black", "white"];
const textColorContainer = ["white", "black"];

var mapOptions = {
  center: new naver.maps.LatLng(36.416744, 127.817338),
  zoom: 8,
};

var map = new naver.maps.Map("map", mapOptions);

for (var i in data) {
  var target = data[i];
  Pointing(target.lat, target.lng);
  AddList(target.content, target.time);
}

function Pointing(lat, lng) {
  var marker = new naver.maps.Marker({
    map: map,
    position: new naver.maps.LatLng(lat, lng),
    icon: {
      content: "<div class='marker'></div>",
      url: "/images/pig.jpg",
      size: new naver.maps.Size(50, 50),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 25),
    },
  });
  setTimeout(function () {
    hideMarker(marker);
  }, 100000);
}

function hideMarker(marker) {
  if (!marker.setMap()) return;
  marker.setMap(null);
}

function AddList(location, time) {
  const span = document.createElement("span");
  span.innerText = `${location}에서 \n ${time} 출몰`;
  colorIndex > 0 ? 0 : 1;
  span.style.background = backGourndColorContainer[colorIndex];
  span.style.color = textColorContainer[colorIndex++];
  log.appendChild(span);

  setTimeout(function () {
    log.removeChild(span);
  }, 50000);

  // setTimeout(removeChild(span), 10000);
}

function setime() {
  var times = new Date();
  infoContent.innerHTML = `${times.getHours()}시 ${times.getMinutes()}분`;
  setTimeout(function () {
    setime();
  }, 1000);
}

setime();
