let cuadrado = document.getElementById("cuadrado");

let rojo = document.getElementById("btnRojo");
let amarillo = document.getElementById("btnAmarillo");
let verde = document.getElementById("btnVerde");

rojo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "red";
});

amarillo.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "yellow";
});

verde.addEventListener("click", function () {
    cuadrado.style.backgroundColor = "green";
});