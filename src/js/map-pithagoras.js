var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.040435, 82.964573],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([55.040435, 82.964573], {}, {
    preset: 'islands#redIcon'
  });
  myMap.geoObjects.add(myPlacemark);
};

// ymaps.ready(init);
