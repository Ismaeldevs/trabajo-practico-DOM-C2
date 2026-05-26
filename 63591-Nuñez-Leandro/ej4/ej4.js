// Ejercicio 4 - Mostrar nombre en tiempo real
// Usamos el evento "input" para reaccionar a cada tecla que el usuario presiona,
// lo que da la sensación de actualización instantánea (a diferencia de "change",
// que solo dispara cuando el campo pierde el foco).

// Seleccionamos el campo de texto y el párrafo de vista previa
const inputNombre = document.getElementById("inputNombre");
const preview     = document.getElementById("preview");

// Escuchamos el evento "input": se dispara con cada tecla presionada
inputNombre.addEventListener("input", function () {
  const nombre = inputNombre.value;

  if (nombre === "") {
    // Campo vacío → mostramos el texto por defecto
    preview.textContent = "Escribi tu nombre arriba.";
  } else {
    // Campo con contenido → mostramos el saludo personalizado
    preview.textContent = "Hola, " + nombre + "!";
  }
});
