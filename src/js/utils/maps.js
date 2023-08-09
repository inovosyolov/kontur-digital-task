ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.028894, 82.926493],
      zoom: 15,
  });

  var myPlacemark = new ymaps.Placemark([55.028894, 82.926493], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/sprite.svg#map-mark',
    iconImageSize: [30, 30],
  });

  // myMap.balloon.open([55.028894, 82.926493], "Депутатская улица, 46", {
  //   closeButton: false
  // });

  myMap.geoObjects.add(myPlacemark);
}
