window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Для работы RequestAnimationFrame
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

   //TABS

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


   //Timer

   let deadLine = '2019-03-17';

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


   //ScrollMenu

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


   // POPUP

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


   //FORM
   let statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   function sendForm(event) {
      let input = form.getElementsByTagName('input');
      // let message = {
      //    loading: 'Загрузка ...',
      //    success: 'Спасибо! Скоро мы с вами свяжемся!',
      //    failure: 'Что-то пошло не так...'
      // };
      let message = {
         loading: '<img src="img/loading.png">Загрузка ...',
         success: '<img src="img/send.png">Спасибо! Скоро мы с вами свяжемся!',
         failure: '<img src="img/warning.png">Что-то пошло не так...'
      };
      form = event.currentTarget;

      event.preventDefault();
      form.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

      let formData = new FormData(form);

      let obj = {};
      formData.forEach(function (value, key) {
         obj[key] = value;
      });
      let json = JSON.stringify(obj);

      request.send(json);

      request.addEventListener('readystatechange', function () {
         if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
         } else if (request.readyState == 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
         } else {
            statusMessage.innerHTML = message.failure;
         }
      });

      for (let i = 0; i < input.length; i++) {
         input[i].value = "";

      }
   }
   let form = document.querySelector('.main-form');
   let formContacts = document.getElementById('form');
   form.addEventListener('submit', sendForm);
   formContacts.addEventListener('submit', sendForm);

});