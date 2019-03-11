window.addEventListener('DOMContentLoaded', function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
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



  let div = document.querySelector('.circle');
  let l = 0,
    top = 300;


  function step() {
    setTimeout(function () {
      if (l >= window.innerWidth) {
        // clearTimeout();
        l = 0;
      } 

        requestAnimationFrame(step);

        l++;
        top = 300 + 30 * Math.sin(0.1 * l).toFixed(2);
        div.style.left = l + "px";
        div.style.top = top + "px";
      

    }, 10);
  }

  step();
})