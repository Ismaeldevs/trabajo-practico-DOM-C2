const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo").addEventListener("click", function() {
    cuadrado.style.backgroundColor = "red"
});
const btnAmarillo = document.getElementById("btnAmarillo").addEventListener("click", function() {
    cuadrado.style.backgroundColor = "yellow"
});
const btnVerde = document.getElementById("btnVerde").addEventListener("click", function() {
    cuadrado.style.backgroundColor = "green"
});
