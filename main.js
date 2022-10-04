const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const judul = document.getElementById ('JavaScript Toggle Dark Mode');
JavaScript_Toggle_Dark_Mode.style.color = 'red';

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});