const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", () => {
  const nombre = inputNombre.value;
  if (nombre === "") {
    preview.textContent = " Escribi tu nombre arriba";
  } else {
    preview.textContent = `Hola, ${nombre}`;
  }
});
