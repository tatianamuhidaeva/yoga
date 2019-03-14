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

  if (!window.requestAnimationFrame)
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

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };


  //TABS

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }

  info.addEventListener('click', function (event) {
    let target = event.target;
    console.log(event);
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

  let deadLine = '2019-03-15';

  function formateNum(num) {
    let str = num.toString();
    if (str.length < 2) {
      return "0" + str;
    } else return str;
  }

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
    menuHeight = menuItem.clientHeight;
  menuItem.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.hasAttribute('href')) {
      let anchor = target.getAttribute('href'),
        div = document.getElementById(anchor.substring(1)),
        scrolled = window.pageYOffset,
        divTop = div.offsetTop - menuHeight;
      stepScrollMenu();

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
      };
    }
  });


  // POPUP
  
  let more = document.querySelector('.more'),
  moreAboutUs = document.querySelectorAll('.description-btn'),

  overlay = document.querySelector('.overlay'),
  close = document.querySelector('.popup-close');

  function moreBtn() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    this.classList.add("btn-this");
    document.body.style.overflow = 'hidden';
  };
  // function removeMoreSplashClass(){
  //   this.classList.remove("more-splash");
  // }
  close.addEventListener('click', function(){
    overlay.style.display = "none";
    let btn = document.querySelector('.btn-this');
    console.log(btn);
    btn.classList.remove("more-splash");
    btn.classList.remove("btn-this");
    document.body.style.overflow = '';
  });

  more.addEventListener('click', moreBtn.bind(more));
  moreAboutUs.forEach(function(item){
    item.addEventListener('click', moreBtn.bind(item));
  });
  
});