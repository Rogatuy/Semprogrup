//* Libs
import './../../../app/js/modalAction.js';
//? Shared Components
import './../../../components/Shared/Popups/order-call-popup/order-call.js';
import './../../../components/Shared/Popups/video-popup/video.js';
//? Chapter Unique Components

import fullpage from 'fullpage.js';

document.addEventListener('DOMContentLoaded', function () {
  new fullpage('#fullpage', {
    autoScrolling: false, // Отключает авто-прокрутку
    fitToSection: false, // Отключает автоматическое подстраивание секции под экран
    scrollBar: true, // Включает стандартный скролл
    navigation: true, // Можно оставить для навигации
    navigationPosition: 'right',
  });
});
