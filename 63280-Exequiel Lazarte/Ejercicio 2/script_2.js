const cuadrado = document.getElementById("cuadrado");
const bntRojo = document.getElementById("btnRojo");
const bntVerde = document.getElementById("btnVerde");
const bntAmarillo = document.getElementById("btnAmarillo")

bntRojo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

bntVerde.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green";
});

bntAmarillo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "yellow";
});
