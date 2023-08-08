let modal = document.querySelector('.modal');
let modalBox = document.querySelector('.modal__box');
let bannerBtn = document.querySelectorAll('.banner__btn');
let modalCloseBtn = document.querySelector('.modal__close-btn');

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 999 - 999 - 99 - 99");

bannerBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
  })
});

modalCloseBtn.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('modal_active');
  }
});

modalBox.addEventListener('click', event => {
  event._isClickWithInModal = true;
});

modal.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('modal_active');
})

im.mask(selector);

new JustValidate('.modal__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
    mail: 'Вы не ввели e-mail'
  },
});

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

