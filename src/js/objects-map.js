//яндекс карты
var objectsMap;
var locations = [
  [55.536894, 37.536131, 'images/icons/map_pins/type_4.svg', '<img src="images/content/objects/kindergarten.jpg" alt="Южное Бутово, ул. Горчакова, 23" />', '<p class="balloon__place">Москва, ЮЗАО</p>', '<p class="balloon__address">Южное Бутово, ул. Горчакова,23</p>', '<p class="balloon__square">Площадь - <b>500м²</b></p>', '<p class="balloon__qnt">Количество мест - <b>300</b></p>', '<p class="balloon__contract">Номер контракта - <b>9076452f5</b></p>', '<p class="balloon__start">Дата начала строительства - <b>25.09.2018</b></p>', '<p class="balloon__finish">Дата сдачи заказчику - <b>13.12.2021</b></p>', '<p><a class="balloon__link" href="objects-detail.html">Смотреть объект</a></p>'],
  [55.910619, 37.485035, 'images/icons/map_pins/type_2.svg', '<img src="images/content/objects/school.jpg" alt="Р-н Левобережный, мкр. 1Б, корп. 24" />', '<p class="balloon__place">Москва, САО</p>', '<p class="balloon__address">Р-н Левобережный, мкр. 1Б, корп. 24</p>', '<p class="balloon__square">Площадь - <b>500м²</b></p>', '<p class="balloon__qnt">Количество мест - <b>300</b></p>', '<p class="balloon__contract">Номер контракта - <b>9076452f5</b></p>', '<p class="balloon__start">Дата начала строительства - <b>25.09.2018</b></p>', '<p class="balloon__finish">Дата сдачи заказчику - <b>13.12.2021</b></p>', '<p><a class="balloon__link" href="objects-detail.html">Смотреть объект</a></p>'],
  [55.735378, 37.826494, 'images/icons/map_pins/type_1.svg', '<img src="images/content/objects/house_1.jpg" alt="ул. Вешняковская, вл. 10" />', '<p class="balloon__place">Москва, ВАО</p>', '<p class="balloon__address">ул. Вешняковская, вл. 10</p>', '<p class="balloon__square">Площадь - <b>500м²</b></p>', '<p class="balloon__qnt">Количество мест - <b>300</b></p>', '<p class="balloon__contract">Номер контракта - <b>9076452f5</b></p>', '<p class="balloon__start">Дата начала строительства - <b>25.09.2018</b></p>', '<p class="balloon__finish">Дата сдачи заказчику - <b>13.12.2021</b></p>', '<p><a class="balloon__link" href="objects-detail.html">Смотреть объект</a></p>']
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('objects_map').appendChild(elem);
}, 2000);

function init() {
  objectsMap = new ymaps.Map('objects_map', {
    center: [59.957262, 29.705429],
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });

  objectsMap.behaviors.disable('scrollZoom');

  var i, placemark;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][5],
      balloonContentBody: '<div class="balloon"><div class="balloon__image">'+ locations[i][3] +'</div><div class="balloon__info">'+ locations[i][4] + locations[i][5] + locations[i][6] + locations[i][7] + locations[i][8] +locations[i][9] + locations[i][10] + locations[i][11] +'</div></div>'
    }, {
      balloonMaxWidth: 560,
      iconLayout: 'default#image',
      iconImageHref: locations[i][2],
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -16]
    });

    objectsMap.geoObjects.add(placemark);
  }

  objectsMap.setBounds(objectsMap.geoObjects.getBounds(), {
    checkZoomRange: true,
    zoomMargin: 35
  });

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    objectsMap.behaviors.disable('drag');
    objectsMap.behaviors.enable('MultiTouch');
  }
}
