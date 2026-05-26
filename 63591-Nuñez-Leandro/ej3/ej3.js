// Ejercicio 3 - Formulario de Login
// Valida usuario y contraseña del lado del cliente sin enviar datos a ningún servidor.

// Seleccionamos los elementos del formulario
const inputUsuario  = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const btnLogin      = document.getElementById("btnLogin");
const mensaje       = document.getElementById("mensaje");

// Cada vez que el usuario empieza a escribir en algún campo, borramos el mensaje
// para que no quede un resultado viejo mientras escribe.
inputUsuario.addEventListener("input", function () {
  mensaje.textContent = "";
});

inputContrasena.addEventListener("input", function () {
  mensaje.textContent = "";
});

// Al hacer clic en "Ingresar" validamos las credenciales
btnLogin.addEventListener("click", function () {
  // Leemos los valores y quitamos espacios en blanco de los extremos
  const usuario  = inputUsuario.value.trim();
  const contrasena = inputContrasena.value.trim();

  // Caso 1: alguno de los campos está vacío
  if (usuario === "" || contrasena === "") {
    mensaje.textContent  = "Completa todos los campos.";
    mensaje.style.color  = "red";
    return; // salimos sin hacer más comprobaciones
  }

  // Caso 2: credenciales correctas (usuario: admin, contraseña: 1234)
  if (usuario === "admin" && contrasena === "1234") {
    mensaje.textContent = "¡Bienvenido, admin!";
    mensaje.style.color = "green";
    return;
  }

  // Caso 3: credenciales incorrectas
  mensaje.textContent = "Credenciales incorrectas.";
  mensaje.style.color = "red";
});
