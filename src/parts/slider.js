//SLIDER
function slider() {
   let slideIndex = 1,
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

      dots.forEach((item) => item.classList.remove('dot-active'));
      dots[slideIndex - 1].classList.add('dot-active');
      slides.forEach((item) => item.style.display = 'none');
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
      for (let i = 0; i < dots.length + 1; i++) {
         if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
         }
      }
   });
}
module.exports = slider;