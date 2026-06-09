const cuadrado = document.getElementById("cuadrado");
const btnrojo = document.getElementById("btnRojo");

btnrojo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "red";
});
const btnamarillo = document.getElementById("btnAmarillo");

btnamarillo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "yellow";
});
const btnverde = document.getElementById("btnVerde");

btnverde.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "green";
});
