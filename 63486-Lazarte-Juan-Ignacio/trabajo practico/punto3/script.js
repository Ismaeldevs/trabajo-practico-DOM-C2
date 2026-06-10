const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const iniciarSesion = document.getElementById("iniciarSesion");
const mensaje = document.getElementById("mensaje");

iniciarSesion.addEventListener("click", () => {
    if (usuario.value === "admin" && contraseña.value === "1234") {
        mensaje.textContent = "Inicio de sesión exitoso";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
});