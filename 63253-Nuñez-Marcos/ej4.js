const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

inputNombre.addEventListener("input", function () {
    // si el campo esta vacio mostrar "escribi tu nombre arriba."
    //si no mostrar "hola, [nombre]"
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        preview.textContent = "Hola, " + nombre + "!";
    }

});