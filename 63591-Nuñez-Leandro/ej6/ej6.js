// Ejercicio 6 - Alternar contenido con un botón
// Usamos classList.toggle para agregar/quitar la clase "oculto" en lugar de
// modificar el estilo directamente. Esto separa la lógica del diseño visual.

// Seleccionamos la tarjeta y el botón
const tarjeta   = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
  // toggle("oculto") devuelve:
  //   true  → la clase fue AGREGADA (la tarjeta quedó oculta)
  //   false → la clase fue QUITADA  (la tarjeta quedó visible)
  const estaOculta = tarjeta.classList.toggle("oculto");

  // Actualizamos el texto del botón según el nuevo estado de la tarjeta
  if (estaOculta) {
    btnToggle.textContent = "Mostrar";
  } else {
    btnToggle.textContent = "Ocultar";
  }
});
