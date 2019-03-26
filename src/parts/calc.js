function calc() {
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
let animateRunNum;
   function runNumbers() {
      // if (!(navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("MSIE") > -1)) {
         if (startNum != finishNum) {
            delta = Math.ceil(Math.abs(finishNum - startNum) / 20);
            animateRunNum = setTimeout(function () {
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
            clearTimeout(animateRunNum);
         }
         // }
      // } else {
      //    setInterval(function () {
      //       if (startNum != finishNum) {
      //          delta = Math.ceil(Math.abs(finishNum - startNum) / 20);
      //          if (finishNum - startNum > 0) {
      //             startNum += delta;
      //             totalValue.innerHTML = startNum;
      //          } else {
      //             startNum -= delta;
      //             totalValue.innerHTML = startNum;
      //          }
      //       } else {
      //          clearInterval();
      //       }
      //    }, 1);
      // }
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
         let a = total;
         placeIndex = this.options[this.selectedIndex].value;
         startNum = +totalValue.textContent;
         finishNum = a * placeIndex;
         runNumbers();
         totalValue.innerHTML = finishNum;
      }
   });
}

module.exports = calc;