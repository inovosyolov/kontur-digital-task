const swiper = new Swiper('.banner__swiper', {
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.banner__nav-btn',
    prevEl: '.banner__nav-btn-prev',
  },
  autoplay: {
    delay: 5000,
    // pauseOnMouseEnter: true,
  },
});
