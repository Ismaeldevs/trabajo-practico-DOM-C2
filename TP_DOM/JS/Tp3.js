const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const Btn = document.getElementById("Btn");
const mensaje = document.getElementById("mensaje");
Btn.style.cursor = "pointer";
inputUsuario.focus(); 


Btn.addEventListener("click", () => {
    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();
    mensaje.textContent = "";

    if ( usuario === "admin" && contrasena === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    } else if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Por favor, Rellene los todos los campos.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }
});
    

