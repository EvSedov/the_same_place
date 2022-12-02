var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.025090, 82.910647],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark([55.025090, 82.910647], { iconCaption: 'Тихий центр Новосибирска' }, {
    preset: 'islands#redHomeIcon'
  });
  myMap.geoObjects.add(myPlacemark);
};

// ymaps.ready(init);
