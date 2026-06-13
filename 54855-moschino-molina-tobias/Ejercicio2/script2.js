let cuadrado = document.getElementById("cuadrado");
let rojo = document.getElementById("btnRojo");
let amarillo = document.getElementById("btnAmarillo");
let verde = document.getElementById("btnVerde")

rojo.addEventListener("click", ()=>{
    cuadrado.style.background="red"; })

amarillo.addEventListener("click", ()=>{
    cuadrado.style.background="yellow"; })

verde.addEventListener("click", ()=>{
    cuadrado.style.background="green"; })