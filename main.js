let openbutton = document.getElementById("addbooks");
let formcontainer = document.getElementById("form_container");
let closebutton = document.getElementById("form_exit2");

openbutton.addEventListener('click', function(){
    if(formcontainer.classList.contains('form_initialstate')){
        formcontainer.classList.replace('form_initialstate','open')
    }
    if(formcontainer.classList.contains('close')){
        formcontainer.classList.replace('close','open') 
    }
})

closebutton.addEventListener('click', function(){
    if(formcontainer.classList.contains('open')){
        formcontainer.classList.replace('open','close')
    }
})