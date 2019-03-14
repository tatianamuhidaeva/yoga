'use strict';

let input = document.querySelector('input'),
 button = document.querySelector('button');

let age = document.getElementById('age');
 
button.addEventListener('click', function(){
  showUser.apply(input, ["Иванов", "Петр"]);
});

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 