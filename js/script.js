window.addEventListener('DOMContentLoaded', function () {
  'use strict';

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
  })


  //Timer

  let deadLine = '2019-03-14';

  function formateNum(num) {
    let str = num.toString();
    if (str.length < 2) {
      return "0" + str;
    } else return str;
  }

  function getTimeRemaining(endtime) {
    let t = (Date.parse(endtime) - Date.parse(new Date()));
    t = t > 0 ? t : 0;
    let seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor(t/1000/60/60);

    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }

  function setClock(id, endtime){
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

      if( t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadLine);
});