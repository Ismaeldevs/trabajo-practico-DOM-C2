const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener("input" , function(){
    mensaje.textContent = "";
});

inputContraseña.addEventListener("input" , function(){
    mensaje.textContent ="";
});

btnLogin.addEventListener("click", function (){
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    //CAMPOS VACIOS
    if (usuario === "" || contraseña === ""){
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color="red";
    } 
    else if (usuario === "admin" && contraseña === "1234"){
        mensaje.textContent="Bienvenido , Admin!!";
        mensaje.style.color="green";
    }
    else {
        mensaje.textContent="Credenciales Incorrectas";
        mensaje.style.color="red";
    }
});