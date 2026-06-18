const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", () => {
    const nombre = inputNombre.value;
    preview.textContent = "¡Hola, " + nombre + "!";
});