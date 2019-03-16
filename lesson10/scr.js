window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  class Options {
    constructor (height, width, bg, fontSize, textAlign){
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }

    newDiv (text) {
      let div = document.createElement('div');
      div.textContent = text;
      div.style.cssText = `width: ${this.width}; height: ${this.height}; background: ${this.bg}; 
      font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
      document.body.appendChild(div);
    }
  }

  let div1 = new Options('100px', '100px', '#f00', '14px', 'center');
  div1.newDiv("blabla");
});