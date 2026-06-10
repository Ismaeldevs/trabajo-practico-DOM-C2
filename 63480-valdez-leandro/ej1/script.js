const titulo = document.getElementById("titulo");
// guarda el h1

const btnCambiar = document.getElementById("btnCambiar");
// guarda el boton

btnCambiar.addEventListener("click", function () {
// cuando hagan click...

  titulo.textContent = "¡Bienvenido al DOM!";
  // cambia el texto

  titulo.style.color = "navy";
  // cambia el color

});