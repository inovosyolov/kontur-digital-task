const swiper = new Swiper('.banner__swiper', {
  resizeObserver: true,
  updateOnWindowResize: true,
  direction: "horizontal",
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  slidesPerView: 1,
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // autoplay: {
  //   delay: 3000,
  // },
});

Fancybox.bind('[data-fancybox="gallery"]', {

});

ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.769383, 37.638521],
      zoom: 14,
  });

  var myPlacemark = new ymaps.Placemark([55.769383, 37.638521], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark.png',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42],
  });

  myMap.geoObjects.add(myPlacemark);
}

