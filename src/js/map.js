var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.025143, 82.928453],
    zoom: 11
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark1 = new ymaps.Placemark([55.025090, 82.910647], { iconCaption: 'Тихий центр Новосибирска' }, {
    preset: 'islands#redHomeIcon'
  });
  var myPlacemark2 = new ymaps.Placemark([55.040172, 82.963737], { iconCaption: 'ЖК Пифагор' }, {
    preset: 'islands#blueHomeIcon'
  });
  var myPlacemark3 = new ymaps.Placemark([55.077958, 82.924454], { iconCaption: 'ЖК Чкалов' }, {
    preset: 'islands#greenHomeIcon'
  });
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
};

// ymaps.ready(init);
