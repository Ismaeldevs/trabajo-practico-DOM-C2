const inputUsuario = document . getElementById ("usuario") ;
const inputContrasena = document . getElementById ("contrasena");
const btnIniciar = document . getElementById ("btnIniciar");
const mensaje = document . getElementById ("mensaje");

// Limpiar el mensaje cuando el usuario empieza a escribir

inputUsuario . addEventListener ("input", function () {
// borrar el texto del mensaje
    mensaje.textContent = "";
}) ;

inputContrasena . addEventListener ("input", function () {
// borrar el texto del mensaje
    mensaje.textContent = "";
}) ;

btnIniciar.addEventListener ("click", function () {
    const usuario = inputUsuario . value . trim () ;
    const contrasena = inputContrasena.value.trim () ;

    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Por favor, complete ambos campos.";
        mensaje.style.color = "red";
    } else if (usuario === "admin" && contrasena === "1234") {
        mensaje.textContent = "¡Inicio de sesión exitoso!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }
});

// Validar campos vacios
// Validar usuario y contrase ña correctos
// Mostrar mensaje correspondiente
