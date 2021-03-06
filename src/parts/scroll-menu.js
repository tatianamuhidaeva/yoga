//ScrollMenu
function scrollMenu() {
   let menuItem = document.querySelector('nav ul'),
      scrolled,
      divTop;

     let animateScrollMenu; 
   function stepScrollMenu() {
      if (Math.abs(scrolled - divTop) > 10) {
         animateScrollMenu = setTimeout(function () {
            scrolled += (divTop - scrolled) / 10;
            window.scrollTo(0, scrolled);
            requestAnimationFrame(stepScrollMenu);
         }, 20);
      } else {
         clearTimeout(animateScrollMenu);
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