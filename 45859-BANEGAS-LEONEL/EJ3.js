let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let boton = document.getElementById("btnLogin");
let mensaje = document.getElementById("mensaje");

usuario.addEventListener("input", function () {
    mensaje.textContent = "";
});

contrasena.addEventListener("input", function () {
    mensaje.textContent = "";
});

boton.addEventListener("click", function () {
    let nombreUsuario = usuario.value.trim();
    let clave = contrasena.value.trim();

    if (nombreUsuario === "" || clave === "") {
        mensaje.textContent = "Completá todos los campos.";
        mensaje.style.color = "red";
    } else if (nombreUsuario === "admin" && clave === "1234") {
        mensaje.textContent = "¡Bienvenido, admin!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Credenciales incorrectas.";
        mensaje.style.color = "red";
    }
});