var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.025143, 82.928453],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark1 = new ymaps.Placemark([54.993272, 82.967196], {}, {
    preset: 'islands#redIcon'
  });
  var myPlacemark2 = new ymaps.Placemark([55.040172, 82.963737], {}, {
    preset: 'islands#redIcon'
  });
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
};

// ymaps.ready(init);
