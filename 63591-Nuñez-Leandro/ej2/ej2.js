// Ejercicio 2 - Semáforo de colores
// Cada botón cambia el color de fondo del cuadrado al color correspondiente.

// Seleccionamos el cuadrado y los tres botones
const cuadrado   = document.getElementById("cuadrado");
const btnRojo    = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde   = document.getElementById("btnVerde");

// Al hacer clic en "Rojo" → fondo rojo
btnRojo.addEventListener("click", function () {
  cuadrado.style.backgroundColor = "red";
});

// Al hacer clic en "Amarillo" → fondo amarillo
btnAmarillo.addEventListener("click", function () {
  cuadrado.style.backgroundColor = "yellow";
});

// Al hacer clic en "Verde" → fondo verde
btnVerde.addEventListener("click", function () {
  cuadrado.style.backgroundColor = "green";
});
