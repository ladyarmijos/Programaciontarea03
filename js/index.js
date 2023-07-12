const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')

registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

const $submit = document.getElementById("submit"),
      $loginContrasena =document.getElementById("loginContrasena"),
      $loginEmail= document.getElementById("loginEmail"),
      $visible = document.getElementById("visible");

/*Mostrar contraseña
document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $loginContrasena.type = "loginContrasena";
        else $loginContrasena.type ="text";
    }
});*/

//Pasar a la pagina principal
document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = "index.html";
        }
    }
})


