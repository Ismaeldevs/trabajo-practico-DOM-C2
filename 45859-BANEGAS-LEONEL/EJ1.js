let titulo = document.getElementById("titulo");
let boton = document.getElementById("btnCambiar");
let cambio = false;

boton.addEventListener("click", function () {

    if (cambio) {
        titulo.textContent = "Esperando cambio...";
        titulo.style.color = "";
        cambio = false;
    } else {
        titulo.textContent = "¡Bienvenido al DOM!";
        titulo.style.color = "navy";
        cambio = true;
    }

});