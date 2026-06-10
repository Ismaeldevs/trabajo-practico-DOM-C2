const cuadro = document.getElementById("cuadro");
const cambiarRojo = document.getElementById("cambiarRojo");
const cambiarVerde = document.getElementById("cambiarVerde");
const cambiarAmarillo = document.getElementById("cambiarAmarillo");

cambiarRojo.addEventListener("click", () => {
    cuadro.style.backgroundColor = "red";
});

cambiarVerde.addEventListener("click", () => {
    cuadro.style.backgroundColor = "green";
});

cambiarAmarillo.addEventListener("click", () => {
    cuadro.style.backgroundColor = "yellow";
});