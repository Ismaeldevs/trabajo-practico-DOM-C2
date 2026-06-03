const inputUsuario= document.getElementById("usuario")
const inputContrasena=document.getElementById("contrasena")
const btnLogin=document.getElementById("btnLogin")
const mensaje = document.getElementById("mensaje")


inputUsuario.addEventListener("click",function(){
mensaje.textContent=""

});


inputContrasena.addEventListener("click",function(){
mensaje.textContent=""


});


btnLogin.addEventListener("click",function(){
    const usuario=inputUsuario.value.trim();
    const contrasena=inputContrasena.value.trim();

    if (!usuario || !admin){
        mensaje.textContent="Completá todos los campos"
        mensaje.style.color="red"
    }
    else if( usuario==="admin" && contrasena==="1234"){
        mensaje.textContent="Bienvenido, admin"
        mensaje.style.color="green"
    }
    else{
        mensaje.textContent="credenciales Incorrectas"
        mensaje.style.color="red"
    }
    
})