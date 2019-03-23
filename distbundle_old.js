/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/RequestAnimationFrame.js":
/*!***********************************************!*\
  !*** ./src/js/parts/RequestAnimationFrame.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

   
   // Для работы RequestAnimationFrame
   function requestAnimationFrame(){
   let lastTime = 0;
   let vendors = ['ms', 'moz', 'webkit', 'o'];
   for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
         window[vendors[x] + 'CancelRequestAnimationFrame'];
   }

   if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
         let currTime = new Date().getTime();
         let timeToCall = Math.max(0, 16 - (currTime - lastTime));
         let id = window.setTimeout(function () {
               callback(currTime + timeToCall);
            },
            timeToCall);
         lastTime = currTime + timeToCall;
         return id;
      };
   }

   if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
         clearTimeout(id);
      };
   }
}


module.exports = requestAnimationFrame;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc(){
   //Calc
   let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      placeIndex = 1,
      personSum = 0,
      daysSum = 0,
      total = 0,
      startNum,
      finishNum,
      delta;

   totalValue.textContent = total;
   function runNumbers(){

      if (startNum != finishNum) {
         delta = Math.ceil(Math.abs(finishNum - startNum)/20);
         setTimeout(function () {
            if (finishNum - startNum > 0){
               startNum +=delta;
               totalValue.innerHTML = startNum;
            } else {
               startNum -=delta;
               totalValue.innerHTML = startNum;
            }
            requestAnimationFrame(runNumbers);
         }, 1);
      } else {
         clearTimeout();
      }
   }
   function check(event, elem){
      if(event.key.match(/\D/)){
         event.preventDefault();
      }
      if(elem.value == "" && event.key == 0){
         event.preventDefault();
      } 
   }
   persons.addEventListener('keypress', function (event) {
      check(event, this);
   });
   restDays.addEventListener('keypress', function (event) {
      check(event, this);
   });

   function calc(){
      total = placeIndex * (daysSum + personSum) * 4000;
      // console.log(restDays);
      if (restDays.value == '' || persons.value == '') {
         startNum = +totalValue.textContent;
         finishNum = 0;
         runNumbers();
      } else {
         startNum = +totalValue.textContent;
         finishNum = +total;
         runNumbers();
      }
   }
   persons.addEventListener('change', function () {
      personSum = +this.value;
      calc();
   });
   restDays.addEventListener('change', function () {
      daysSum = +this.value;
      calc();
   });

   place.addEventListener('change', function () {
      if(restDays.value == '' || persons.value == ''){
         totalValue.innerHTML = 0;
      } else {
         let a = total;
         placeIndex = this.options[this.selectedIndex].value;
         startNum = +totalValue.textContent;
         finishNum = a* this.options[this.selectedIndex].value;
         runNumbers();
      }
   }); 
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/phonemask.js":
/*!***********************************!*\
  !*** ./src/js/parts/phonemask.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function phonemask(){
   //PhoneMask
   function maskTel(selector, mask, placeholder) {
    const XCHAR = "x";
    let tels = document.querySelectorAll(selector);
    tels.forEach(tel => {
       function autoInsert(mask, pos) {
          for (let i = pos; i < mask.length; i++) {
             if (mask[i] != XCHAR) {
                tel.value += mask[i];
             } else {
                break;
             }
          }
       }

       if (placeholder) {
          tel.setAttribute('placeholder', mask.replace(new RegExp(XCHAR, 'g'), '_'));
       }

       tel.addEventListener('keypress', function (e) {
          let place = tel.value.length;
          autoInsert(mask, place);
          place = tel.value.length;
          if ((e.key != mask[place] && mask[place] != XCHAR) ||
             (mask[place] == XCHAR && e.key.match(/\D/))) {
             e.preventDefault();
          }
       });
    });
 }

 maskTel('input[type="tel"]', '+7 (xxx) xxx xx xx', true);
}
module.exports = phonemask;

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


   // POPUP
function popup(){
   let more = document.querySelector('.more'),
      popup = document.querySelector('.overlay .popup'),
      moreAboutUs = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      currTop;

   let getNumFromPx = str => str.substring(0, str.indexOf("px"));

   function animatePopFall() {
      if (currTop.toFixed(0) < 150) {
         setTimeout(function () {
            currTop += (150 - currTop) / 7;
            popup.style.top = currTop + "px";
            requestAnimationFrame(animatePopFall);
         }, 20);
      } else {
         clearTimeout();
      }
   }

   function animatePopClose() {
      if (popup.style.opacity > 0) {
         setTimeout(function () {
            popup.style.opacity -= 0.05;
            requestAnimationFrame(animatePopClose);
         }, 10);
      } else {
         clearTimeout();
         overlay.style.display = "none";
      }
   }

   function moreBtn() {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      this.classList.add("btn-this");
      document.body.style.overflow = 'hidden';
      popup.style.opacity = 1;
      // Написать анимацию на скроллах
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
         popup.style.top = -popup.clientHeight + "px";
         currTop = +getNumFromPx(popup.style.top);
         animatePopFall();
      }
   }

   close.addEventListener('click', function () {
      let btn = document.querySelector('.btn-this');
      btn.classList.remove("more-splash");
      btn.classList.remove("btn-this");
      document.body.style.overflow = '';
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
         animatePopClose();
      }
   });

   more.addEventListener('click', moreBtn.bind(more));
   moreAboutUs.forEach(function (item) {
      item.addEventListener('click', moreBtn.bind(item));
   });


   //animation Fade

   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ||
      !((navigator.userAgent.indexOf("Edge") > -1) || (navigator.userAgent.indexOf("MSIE") > -1))) {
      overlay.classList.remove('fade');
   }
}

module.exports = popup;

/***/ }),

/***/ "./src/js/parts/scroll-menu.js":
/*!*************************************!*\
  !*** ./src/js/parts/scroll-menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//ScrollMenu
function scrollMenu() {
   let menuItem = document.querySelector('nav ul'),
      scrolled,
      divTop;

   function stepScrollMenu() {
      if (Math.abs(scrolled - divTop) > 10) {
         setTimeout(function () {
            scrolled += (divTop - scrolled) / 10;
            window.scrollTo(0, scrolled);
            requestAnimationFrame(stepScrollMenu);
         }, 20);
      } else {
         clearTimeout();
      }
   }

   menuItem.addEventListener('click', function (event) {
      let target = event.target;

      if (target && target.hasAttribute('href')) {
         let anchor = target.getAttribute('href'),
            div = document.getElementById(anchor.substring(1));
         scrolled = window.pageYOffset;
         divTop = div.offsetTop - this.clientHeight;
         stepScrollMenu();
      }
   });
}

module.exports = scrollMenu;

/***/ }),

/***/ "./src/js/parts/sendform.js":
/*!**********************************!*\
  !*** ./src/js/parts/sendform.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

   
   //FORM
   function sendForm(){
   let statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   function sendForm(form) {
      form.addEventListener('submit', function (event) {
         let input = form.getElementsByTagName('input');
         let message = {
            loading: '<img src="img/loading.png">Загрузка ...',
            success: '<img src="img/send.png">Спасибо! Скоро мы с вами свяжемся!',
            failure: '<img src="img/warning.png">Что-то пошло не так...'
         };
         // form = event.currentTarget;

         event.preventDefault();
         form.appendChild(statusMessage);

         let formData = new FormData(form);

         let obj = {};
         formData.forEach(function (value, key) {
            obj[key] = value;
         });
         let json = JSON.stringify(obj);



         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');
         // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

         request.send(json);

         request.addEventListener('readystatechange', function () {
            function postData() {
               let promise = new Promise(function (resolve, reject) {
                  console.log("Выполняется лисенер...");
                  if (request.readyState < 4) {
                     console.log("request.readyState " + request.readyState);
                     // console.log(resolve());
                     console.log(message.loading);
                     resolve(message.loading);
                  } else if (request.readyState == 4 && request.status == 200) {
                     console.log("request.readyState " + request.readyState);
                     // console.log(resolve());
                     console.log(message.success);
                     resolve(message.success);
                  } else {
                     console.log("request.readyState" + request.readyState);
                     console.log(reject());
                     reject();
                  }
               });
               return promise;
            } //end postData()

            postData()
               .then((mark) => {
                  console.log(mark);
                  statusMessage.innerHTML = mark;
               })
               .catch(() => {
                  console.log("then error");
                  statusMessage.innerHTML = message.failure
               })
               .then(clearInput);
         });



         function clearInput() {
            for (let i = 0; i < input.length; i++) {
               input[i].value = "";
            }
         }

      }); //end form.addEventListener
   }

   let form = document.querySelector('.main-form');
   let formContacts = document.getElementById('form');

   sendForm(form);
   sendForm(formContacts);

   }
   module.exports = sendForm;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


   //SLIDER
   function slider(){
   let slideIndex = 1,
      wrap = document.querySelector('.wrap'),
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

      // wrap.style.cssText = "display: flex; justify-content: center; align-items: center;";

   showSlides(slideIndex);

   function animateCircle(){
      if (parseInt(getComputedStyle(slides[slideIndex - 1]).borderRadius) > 0) {
         setTimeout(function () {
            slides[slideIndex - 1].style.borderRadius = (parseInt(getComputedStyle(slides[slideIndex - 1]).borderRadius) - 1) + "%";
            slides[slideIndex - 1].style.transform = "scale(" + (parseFloat(/[\.0-9]+/.exec(slides[slideIndex - 1].style.transform)) +0.02) + ")";
            requestAnimationFrame(animateCircle);
         }, 5);
      } else {
         clearTimeout();
      }

   }
   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }

      dots.forEach((item) => item.classList.remove('dot-active'));
      dots[slideIndex - 1].classList.add('dot-active');
      slides[slideIndex - 1].style.cssText = "border-radius: 50%; transform: scale(0)";
      slides.forEach((item) => item.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';
      animateCircle();
   }

   function plusSlides(n) {
      showSlides(slideIndex += n);
   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }

   prev.addEventListener('click', function () {
      plusSlides(-1);
   });

   next.addEventListener('click', function () {
      plusSlides(1);
   });

   dotWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
         if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
         }
      }
   });
}
module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

  //TABS
  function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = a => {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
    };

    hideTabContent(1);

    let showTabContent = b => {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    };

    info.addEventListener('click', event => {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  }
  module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Timer
function timer() {
   let deadLine = '2019-03-24';

   let formateNum = num =>
      (num.toString().length < 2) ?
      "0" + num.toString() : num.toString();

   function getTimeRemaining(endtime) {
      let t = (Date.parse(endtime + "T00:00:00.000") - Date.parse(new Date()));
      t = t > 0 ? t : 0;
      let seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor(t / 1000 / 60 / 60);

      return {
         'total': t,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
         let t = getTimeRemaining(endtime);
         hours.textContent = formateNum(t.hours);
         minutes.textContent = formateNum(t.minutes);
         seconds.textContent = formateNum(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock('timer', deadLine);
}
module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   let requestAnimationFrame = __webpack_require__(/*! ./parts/RequestAnimationFrame.js */ "./src/js/parts/RequestAnimationFrame.js"),
      phonemask = __webpack_require__(/*! ./parts/phonemask.js */ "./src/js/parts/phonemask.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
      popup = __webpack_require__(/*! ./parts/popup.js */ "./src/js/parts/popup.js"),
      scrollMenu = __webpack_require__(/*! ./parts/scroll-menu.js */ "./src/js/parts/scroll-menu.js"),
      sendForm = __webpack_require__(/*! ./parts/sendform.js */ "./src/js/parts/sendform.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
