   
   //FORM
   function sendForm(){

   let form = document.querySelector('.main-form'),
    formContacts = document.getElementById('form'),
    statusMessage = document.createElement('div');
      
   statusMessage.classList.add('status');

   function sendForm(form) {
      form.addEventListener('submit', function (event) {
         let input = form.getElementsByTagName('input');
         let message = {
            loading: '<img src="img/loading.png">Загрузка ...',
            success: '<img src="img/send.png">Спасибо! Скоро мы с вами свяжемся!',
            failure: '<img src="img/warning.png">Что-то пошло не так...'
         };
         event.preventDefault();
         form.appendChild(statusMessage);

         let formData = new FormData(form);

         let obj = {};
         formData.forEach(function (value, key) {
            obj[key] = value;
         });
         let json = JSON.stringify(obj);



         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');
         // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

         request.send(json);

         request.addEventListener('readystatechange', function () {
            function postData() {
               let promise = new Promise(function (resolve, reject) {
                  if (request.readyState < 4) {
                     resolve(message.loading);
                  } else if (request.readyState == 4 && request.status == 200) {
                     resolve(message.success);
                  } else {
                     reject();
                  }
               });
               return promise;
            } //end postData()

            postData()
               .then((mark) => {
                  statusMessage.innerHTML = mark;
               })
               .catch(() => {
                  statusMessage.innerHTML = message.failure
               })
               .then(clearInput);
         });



         function clearInput() {
            for (let i = 0; i < input.length; i++) {
               input[i].value = "";
            }
         }

      }); //end form.addEventListener
   }


   sendForm(form);
   sendForm(formContacts);

   }
   module.exports = sendForm;