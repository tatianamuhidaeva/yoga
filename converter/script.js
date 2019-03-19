window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

  inputRub.addEventListener('input', () => {
    function postData() {
      let request = new XMLHttpRequest();

      return new Promise(function (resolve, reject) {

        request.open('GET', 'current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
          if(request.readyState  < 4){
            console.log("request.readyState" + request.readyState);
            resolve();
          } else if (request.readyState === 4 && request.status == 200) {
            console.log("request.readyState" + request.readyState);
            resolve();

          } else {
            console.log("request.readyState" + request.readyState);
            reject();
            // 
          }
        });
      });
    }
    postData().then(() => {
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd;
      })
      .then(() => {
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd;
      })
      .catch(() => {
        inputUsd.value = 'Что-то пошло не так...';
      });
  });
});