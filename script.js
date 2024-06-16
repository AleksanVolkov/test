
const form= document.querySelector('.pop_up'),
openForm= document.querySelector('.btn_top'),
closeForm= document.querySelector('#exit'),
save= document.querySelector('#save'),
mail= document.querySelector('#mail'),
password= document.querySelector('#password'),
restore= document.querySelector('#restore'),
login= document.querySelector('#login'),
registration= document.querySelector('#registration');



form.addEventListener('submit',(e)=>{
    e.preventDefault()
});

openForm.addEventListener('click',()=>{

    form.style.display="flex";

});

closeForm.addEventListener('click',()=>{
    form.style.display="none";
});

restore.addEventListener('click',()=>{

});

login.addEventListener('click',()=>{

});

registration.addEventListener('click',()=>{

});

let mailValue= mail.value,
    passwordValue= password.value;

const userData={}



 