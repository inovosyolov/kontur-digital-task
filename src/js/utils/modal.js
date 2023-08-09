let modal = document.querySelector('.modal');
let modalBox = document.querySelector('.modal__box');
let bannerBtn = document.querySelectorAll('.banner__btn');
let modalCloseBtn = document.querySelector('.modal__close-btn');

bannerBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
    document.body.classList.toggle('stop-scroll');
  })
});

modalCloseBtn.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  document.body.classList.remove('stop-scroll');
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('modal_active');
    document.body.classList.remove('stop-scroll');
  }
});

modalBox.addEventListener('click', event => {
  event._isClickWithInModal = true;
});

modal.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('modal_active');
  document.body.classList.remove('stop-scroll');
})
