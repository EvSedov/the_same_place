var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.077958, 82.924454],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([55.077958, 82.924454], {}, {
    preset: 'islands#redHomeIcon'
  });
  myMap.geoObjects.add(myPlacemark);
};

// ymaps.ready(init);