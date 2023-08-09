const swiper = new Swiper('.banner__swiper', {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.banner__nav-btn',
    prevEl: '.banner__nav-btn-prev',
  },
});
