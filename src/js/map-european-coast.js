var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [54.993272, 82.967196],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([54.993272, 82.967196], { iconCaption: 'ЖК Европейский берег' }, {
    preset: 'islands#redHomeIcon'
  });
  myMap.geoObjects.add(myPlacemark);
};

// ymaps.ready(init);
