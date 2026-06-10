const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

// Escuchá el evento "input" del campo de texto
inputNombre.addEventListener("input", function () {
    //Si el campo está vacío mostrar "Escribi tu nombre arriba."
    if (inputNombre.value.trim() === "") {
        preview.textContent = "Escribi tu nombre arriba."
    // Sino mostrar "Hola, [nombre]!"
    } else {
        preview.textContent = "Hola, " + inputNombre.value + "!"
    }
});