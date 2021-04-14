//яндекс карты
var contactsMap;
var contactsMapCenter;

if($('body').width() > 1023) {
  contactsMapCenter = [55.881490, 37.438000];
} else {
  contactsMapCenter = [55.881490, 37.432924];
}

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('contacts_map').appendChild(elem);
}, 2000);



function init() {
  contactsMap = new ymaps.Map('contacts_map', {
    center: contactsMapCenter,
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });

  contactsMap.behaviors.disable('scrollZoom');

  var i, placemark;

  placemark = new ymaps.Placemark([55.881490, 37.432924], {
    hintContent: 'г. Химки, ул. Панфилова, вл. 19, стр. 1'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/icons/pin_map_logo.svg',
    iconImageSize: [141, 141],
    iconImageOffset: [-71, -71]
  });

  contactsMap.geoObjects.add(placemark);

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    contactsMap.behaviors.disable('drag');
    contactsMap.behaviors.enable('MultiTouch');
  }
}
