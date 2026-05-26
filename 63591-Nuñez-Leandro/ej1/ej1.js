// Ejercicio 1 - Cambiar el título de la página
// Al hacer clic en el botón, el h1 cambia de texto y se pone azul marino.

// Seleccionamos los elementos por su id
const titulo     = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

// Escuchamos el evento "click" en el botón
btnCambiar.addEventListener("click", function () {
  // Cambiamos el texto visible del h1
  titulo.textContent = "¡Bienvenido al DOM!";

  // Cambiamos el color del texto a azul marino
  titulo.style.color = "navy";
});
