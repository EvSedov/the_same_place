var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.039144, 82.954546],
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
  var myPlacemark4 = new ymaps.Placemark([55.011009, 82.931650], { iconCaption: 'Студия № 1 в "Инских холмах"' }, {
    preset: 'islands#yellowHomeIcon'
  });
  var myPlacemark5 = new ymaps.Placemark([55.011009, 82.931650], { iconCaption: 'Студия № 2 в "Инских холмах"' }, {
    preset: 'islands#pinkHomeIcon'
  });
  var myPlacemark6 = new ymaps.Placemark([55.011009, 82.931650], { iconCaption: 'Студия № 3 в "Инских холмах"' }, {
    preset: 'islands#darkOrangeHomeIcon'
  });

  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
  myMap.geoObjects.add(myPlacemark4);
  myMap.geoObjects.add(myPlacemark5);
  myMap.geoObjects.add(myPlacemark6);
};

// ymaps.ready(init);
