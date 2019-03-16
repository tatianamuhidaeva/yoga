window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  function maskTel(selector, mask, placeholder) {
    const XCHAR = "x";
    let tel = document.querySelector(selector);

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
    // autoInsert(mask, 0);
    tel.addEventListener('keypress', function (e) {
      let place = tel.value.length;
      autoInsert(mask, place);
      place = tel.value.length;
      if ((e.key != mask[place] && mask[place] != XCHAR) ||
        (mask[place] == XCHAR && e.key.match(/\D/))) {
        e.preventDefault();
      }
    });
  }

  maskTel('#tel', '+7 (xxx) xxx xxx', true);

});