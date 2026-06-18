const inputUsuario = document.getElementById("usuario");
const inputContrasenia = document.getElementById("contrasenia");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

inputUsuario.addEventListener ("input", function () {
mensaje.textContent = "";
});
inputContrasenia.addEventListener ("input", function () {
mensaje.textContent = "";
});

btnLogin.addEventListener("click", function () {
    const usuario = inputUsuario.value.trim ();
    const contrasenia = inputContrasenia.value.trim ();
    if (usuario === "" || contrasenia === "") {
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";
        return
    }
    if (usuario === "admin" && contrasenia === "1234") {
        mensaje.textContent = "Bienvenido Admin!!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Credenciales incorrectas";
        mensaje.style.color = "red";
    }
});
