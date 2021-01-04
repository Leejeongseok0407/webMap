var mapOptions = {
  center: new naver.maps.LatLng(36.34128315236848, 127.36064560845736),
  zoom: 8,
};

var map = new naver.maps.Map("map", mapOptions);

for (var i in data) {
  var target = data[i];
  marker = new naver.maps.Marker({
    map: map,
    position: new naver.maps.LatLng(target.lat, target.lng),
    icon: {
      content: "<div class='marker'></div>",
      url: "/images/pig.jpg",
      size: new naver.maps.Size(50, 50),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 25),
    },
  });
}

function Pointing(lat, lng) {
  console.log("d");
  marker = new naver.maps.Marker({
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
}
