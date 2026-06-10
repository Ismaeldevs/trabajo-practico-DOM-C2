const nombre = document.getElementById("nombre");
const preview = document.getElementById("preview");

nombre.addEventListener("input", () => {
    const texto = nombre.value;

    if (texto.length > 0) {
        preview.textContent = "Hola, " + texto;
    } else {
        preview.textContent = "Escribi tu nombre arriba";
    }
});