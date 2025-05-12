// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  loop: true, // Slider se bude opakovat
  navigation: {
    nextEl: '.swiper-button-next', // Selektor pro tlačítko "další"
    prevEl: '.swiper-button-prev', // Selektor pro tlačítko "předchozí"
  },
  pagination: {
    el: '.swiper-pagination', // Selektor pro stránkování
    clickable: true,          // Umožní klikání na tečky
  },
});