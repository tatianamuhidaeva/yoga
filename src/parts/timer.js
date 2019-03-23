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