window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var Promise = require('es6-promise').Promise;
   var FormData = require('formdata-polyfill');
   let requestAnimationFrame = require('./parts/RequestAnimationFrame.js'),
      phonemask = require('./parts/phonemask.js'),
      tabs = require('./parts/tabs.js'),
      timer = require('./parts/timer.js'),
      popup = require('./parts/popup.js'),
      scrollMenu = require('./parts/scroll-menu.js'),
      sendForm = require('./parts/sendform.js'),
      slider = require('./parts/slider.js'),
      calc = require('./parts/calc.js');

      
      requestAnimationFrame();
      phonemask();
      tabs();
      timer();
      popup();
      scrollMenu();
      sendForm();
      slider();
      calc();
});