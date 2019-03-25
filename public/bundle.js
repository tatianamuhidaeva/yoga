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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var requestAnimationFrame = __webpack_require__(/*! ./parts/RequestAnimationFrame.js */ "./parts/RequestAnimationFrame.js"),
      phonemask = __webpack_require__(/*! ./parts/phonemask.js */ "./parts/phonemask.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      popup = __webpack_require__(/*! ./parts/popup.js */ "./parts/popup.js"),
      scrollMenu = __webpack_require__(/*! ./parts/scroll-menu.js */ "./parts/scroll-menu.js"),
      sendForm = __webpack_require__(/*! ./parts/sendform.js */ "./parts/sendform.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js");

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

/***/ }),

/***/ "./parts/RequestAnimationFrame.js":
/*!****************************************!*\
  !*** ./parts/RequestAnimationFrame.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Для работы RequestAnimationFrame
function requestAnimationFrame() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
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

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  //Calc
  var persons = document.querySelectorAll('.counter-block-input')[0],
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

  function runNumbers() {
    if (!(navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("MSIE") > -1)) {
      if (startNum != finishNum) {
        delta = Math.ceil(Math.abs(finishNum - startNum) / 20);
        setTimeout(function () {
          if (finishNum - startNum > 0) {
            startNum += delta;
            totalValue.innerHTML = startNum;
          } else {
            startNum -= delta;
            totalValue.innerHTML = startNum;
          }

          requestAnimationFrame(runNumbers);
        }, 1);
      } else {
        clearTimeout();
      } // }

    } else {
      setInterval(function () {
        if (startNum != finishNum) {
          delta = Math.ceil(Math.abs(finishNum - startNum) / 20);

          if (finishNum - startNum > 0) {
            startNum += delta;
            totalValue.innerHTML = startNum;
          } else {
            startNum -= delta;
            totalValue.innerHTML = startNum;
          }
        } else {
          clearInterval();
        }
      }, 1);
    }
  }

  function check(event, elem) {
    if (event.key.match(/\D/)) {
      event.preventDefault();
    }

    if (elem.value == "" && event.key == 0) {
      event.preventDefault();
    }
  }

  persons.addEventListener('keypress', function (event) {
    check(event, this);
  });
  restDays.addEventListener('keypress', function (event) {
    check(event, this);
  });

  function calc() {
    total = placeIndex * (daysSum + personSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      startNum = +totalValue.textContent;
      finishNum = 0;
      runNumbers();
      totalValue.innerHTML = finishNum;
    } else {
      startNum = +totalValue.textContent;
      finishNum = +total;
      runNumbers();
      totalValue.innerHTML = finishNum;
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
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
      placeIndex = this.options[this.selectedIndex].value;
    } else {
      var a = total;
      placeIndex = this.options[this.selectedIndex].value;
      startNum = +totalValue.textContent;
      finishNum = a * placeIndex;
      runNumbers();
      totalValue.innerHTML = finishNum;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/phonemask.js":
/*!****************************!*\
  !*** ./parts/phonemask.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function phonemask() {
  //PhoneMask
  function maskTel(selector, mask, placeholder) {
    var XCHAR = "x";
    var tels = document.querySelectorAll(selector);
    tels.forEach(function (tel) {
      function autoInsert(mask, pos) {
        for (var i = pos; i < mask.length; i++) {
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
        var place = tel.value.length;
        autoInsert(mask, place);
        place = tel.value.length;

        if (e.key != mask[place] && mask[place] != XCHAR || mask[place] == XCHAR && e.key.match(/\D/)) {
          e.preventDefault();
        }
      });
    });
  }

  maskTel('input[type="tel"]', '+7 (xxx) xxx xx xx', true);
}

module.exports = phonemask;

/***/ }),

/***/ "./parts/popup.js":
/*!************************!*\
  !*** ./parts/popup.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// POPUP
function popup() {
  var more = document.querySelector('.more'),
      popup = document.querySelector('.overlay .popup'),
      moreAboutUs = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      status,
      currTop;

  var getNumFromPx = function getNumFromPx(str) {
    return str.substring(0, str.indexOf("px"));
  };

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
    popup.style.opacity = 1; // Написать анимацию на скроллах

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      popup.style.top = -popup.clientHeight + "px";
      currTop = +getNumFromPx(popup.style.top);
      animatePopFall();
    }
  }

  close.addEventListener('click', function () {
    var btn = document.querySelector('.btn-this');
    btn.classList.remove("more-splash");
    btn.classList.remove("btn-this");
    document.body.style.overflow = '';

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      animatePopClose();
    }

    status = document.querySelectorAll('.status');
    status.forEach(function (item) {
      return item.innerHTML = "";
    });
  });
  more.addEventListener('click', moreBtn.bind(more));
  moreAboutUs.forEach(function (item) {
    item.addEventListener('click', moreBtn.bind(item));
  }); //animation Fade

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || !(navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("MSIE") > -1)) {
    overlay.classList.remove('fade');
  }
}

module.exports = popup;

/***/ }),

/***/ "./parts/scroll-menu.js":
/*!******************************!*\
  !*** ./parts/scroll-menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//ScrollMenu
function scrollMenu() {
  var menuItem = document.querySelector('nav ul'),
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
    var target = event.target;

    if (target && target.hasAttribute('href')) {
      var anchor = target.getAttribute('href'),
          div = document.getElementById(anchor.substring(1));
      scrolled = window.pageYOffset;
      divTop = div.offsetTop - this.clientHeight;
      stepScrollMenu();
    }
  });
}

module.exports = scrollMenu;

/***/ }),

/***/ "./parts/sendform.js":
/*!***************************!*\
  !*** ./parts/sendform.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

//FORM
function sendForm() {
  var form = document.querySelector('.main-form'),
      formContacts = document.getElementById('form'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendFormListener(form) {
    form.addEventListener('submit', function (event) {
      var input = form.getElementsByTagName('input');
      var message = {
        loading: '<img src="img/loading.png">Загрузка ...',
        success: '<img src="img/send.png">Спасибо! Скоро мы с вами свяжемся!',
        failure: '<img src="img/warning.png">Что-то пошло не так...'
      };
      event.preventDefault();
      form.appendChild(statusMessage);
      var formData = new FormData(form);
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php'); // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      request.send(json);
      request.addEventListener('readystatechange', function () {
        function postData() {
          var promise = new Promise(function (resolve, reject) {
            if (request.readyState < 4) {
              resolve(message.loading);
            } else if (request.readyState == 4 && request.status == 200) {
              resolve(message.success);
            } else {
              reject();
            }
          });
          return promise;
        } //end postData()


        postData().then(function (mark) {
          statusMessage.innerHTML = mark;
        }).catch(function () {
          statusMessage.innerHTML = message.failure;
        }).then(clearInput);
      });

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }
    }); //end form.addEventListener
  }

  sendFormListener(form);
  sendFormListener(formContacts);
}

module.exports = sendForm;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SLIDER
function slider() {
  var slideIndex = 1,
      wrap = document.querySelector('.wrap'),
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    dots[slideIndex - 1].classList.add('dot-active');
    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
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
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

//TABS
function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
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

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Timer
function timer() {
  var deadLine = '2019-03-27';

  var formateNum = function formateNum(num) {
    return num.toString().length < 2 ? "0" + num.toString() : num.toString();
  };

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime + "T00:00:00.000") - Date.parse(new Date());
    t = t > 0 ? t : 0;
    var seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map