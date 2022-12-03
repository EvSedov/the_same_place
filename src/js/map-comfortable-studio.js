var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.011009, 82.931650],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([55.011009, 82.931650], { iconCaption: 'Студия № 1 в "Инских Холмах"' }, {
    preset: 'islands#yellowHomeIcon'
  });
  myMap.geoObjects.add(myPlacemark);
};

// ymaps.ready(init);