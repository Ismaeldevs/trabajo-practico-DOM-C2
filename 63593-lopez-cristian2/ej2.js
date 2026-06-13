const cuadrado=document.getElementById("Cuadrado");
const btnRojo=document.getElementById("btnRojo");
const btnAmarillo=document.getElementById("btnAmarillo");
const btnVerde=document.getElementById("btnVerde");

btnRojo.addEventListener("click", function () {
    btnRojo.style.color="Red";
});
btnAmarillo.addEventListener("click", function () {
    btnAmarillo.style.color="Yellow";
});
btnVerde.addEventListener("click", function () {
    btnVerde.style.color="Green";
});