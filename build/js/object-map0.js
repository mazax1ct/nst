//яндекс карты
var objectMap;

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('object_map').appendChild(elem);
}, 2000);

function init() {
  objectMap = new ymaps.Map('object_map', {
    center: [55.536894, 37.536131],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });

  objectMap.behaviors.disable('scrollZoom');

  var i, placemark;

  placemark = new ymaps.Placemark([55.536894, 37.536131], {
    hintContent: 'Южное Бутово, ул. Горчакова, 23'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/icons/map_pins/type_4.svg',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16]
  });

  objectMap.geoObjects.add(placemark);

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    objectMap.behaviors.disable('drag');
    objectMap.behaviors.enable('MultiTouch');
  }
}
