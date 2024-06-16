
const form= document.querySelector('.pop_up'),
openForm= document.querySelector('.btn_top'),
closeForm= document.querySelector('#exit'),
save= document.querySelector('#save'),
mail= document.querySelector('#mail'),
password= document.querySelector('#password'),
restore= document.querySelector('#restore'),
login= document.querySelector('#login'),
registration= document.querySelector('#registration');



form.addEventListener('submit',(e)=>{/*сброс поведения браузера при отправке формы*/
    e.preventDefault()
});

openForm.addEventListener('click',()=>{/*открытие МО*/

    form.style.display="flex";

});

closeForm.addEventListener('click',()=>{/*зарытие МО*/
    form.style.display="none";
});

restore.addEventListener('click',()=>{

});

login.addEventListener('click',()=>{

});

registration.addEventListener('click',()=>{

});

let mailValue= mail.value,/*переменные с вводимыми в инпуты данными*/
    passwordValue= password.value;

const userData={} /*объект для хранения информации по пользователям(логин, пароль) */

/*в задании не указанно каким функционалом должен обладать модальное окно, открытие дополнительного окна по клику на кнопку регистрация(логин, пароль + повторение пароля), проверка логина на повтор в userData, добавление нового пользователя (логин, пароль), функционал примерно написан, если нужно добавлю*/



 