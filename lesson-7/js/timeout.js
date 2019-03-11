'use strict';

let div = document.createElement('div');

document.body.appendChild(div);

let timer = setInterval(function(){
  let date = new Date();
  div.textContent = formateDate(date);
},1000);

//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры
function formateDate(date) {
  return formateNum(date.getHours()) + ":"
+ formateNum(date.getMinutes()) + ":" + formateNum(date.getSeconds());
}

//Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
function formateNum(num) {
  let str = num.toString();
  if (str.length < 2) {
    return "0" + str;
  } else return str;
}