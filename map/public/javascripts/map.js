(() => {
  var mapOptions = {
    center: new naver.maps.LatLng(34.9506986, 127.4872429),
    zoom: 11,
  };

  var map = new naver.maps.Map("map", mapOptions);

  maker = new naver.maps.Marker({
    map: map,
    position: new naver.maps.LatLng(34.9506986, 127.4872429),
    icon: {
      content: "<div class='marker'>dd</div>",
    },
  });
})();
