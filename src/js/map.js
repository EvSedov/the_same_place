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
  var myPlacemark2 = new ymaps.Placemark([55.011009, 82.931650], { iconCaption: 'Студии в "Инских холмах"' }, {
    preset: 'islands#darkOrangeHomeIcon'
  });

  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
};
