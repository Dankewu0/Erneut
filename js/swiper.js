import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  // Основные параметры
  direction: "horizontal", // горизонтальная прокрутка
  loop: true, // бесконечная прокрутка

  // Пагинация (точки)
  pagination: {
    el: ".swiper-pagination", // элемент для точек
  },

  // Кнопки навигации
  navigation: {
    nextEl: ".swiper-button-next", // кнопка "вперёд"
    prevEl: ".swiper-button-prev", // кнопка "назад"
  },

  // Полоса прокрутки
  scrollbar: {
    el: ".swiper-scrollbar", // элемент для скроллбара
  },

  // Подключаем модули (обязательно для Swiper 8+)
  modules: [Navigation, Pagination, Scrollbar],
});
