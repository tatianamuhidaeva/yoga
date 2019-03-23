
   // POPUP
function popup(){
   let more = document.querySelector('.more'),
      popup = document.querySelector('.overlay .popup'),
      moreAboutUs = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      status,
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
      status = document.querySelectorAll('.status');
      status.forEach(item => item.innerHTML = "");
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