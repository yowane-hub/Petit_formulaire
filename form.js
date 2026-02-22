const displayform =document.getElementById('displayform');

const forlogin=_('forlogin');
const loginform= _('formlogin');
const forRegister=_('forRegister');
const registerform=_('formRegister');
const formcontainer= _('formContainer');



displayform.addEventListener('click', showform);

forlogin.addEventListener('click',()=>{
    forlogin.classList.add('active');
    forRegister.classList.remove('active');

    if(loginform.classList.contains('toggleform')){
        formcontainer.style.transform ='translate(0%)';
        formcontainer.style.transition = 'transform 0.5s';
        registerform.classList.add('toggleform');
        loginform.classList.remove('toggleform');
    }
})

forRegister.addEventListener('click', ()=>{
    forlogin.classList.remove('active');
    forRegister.classList.add('active');

    if(registerform.classList.contains('toggleform')){
        formcontainer.style.transform ='translate(-100%)';
        formcontainer.style.transition = 'transform 0.5s';
        registerform.classList.remove('toggleform');
        loginform.classList.add('toggleform');
    }
});

function _(e){
    return document.getElementById(e);
}

function showform(){
    document.querySelector('.form-wrapper .card').classList.toggle('montrer');
}
