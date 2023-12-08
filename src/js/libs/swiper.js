import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true, 
  observeParents: true
});