
const cuadrado= document.getElementById("cuadrado");
const btnRojo= document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde= document.getElementById("btnVerde");
// Asigná un evento a cada botón para cambiar el color de

btnAmarillo.addEventListener("click",function(){
    cuadrado.style.backgroundColor="yellow"

})
btnRojo.addEventListener("click",function(){
    cuadrado.style.backgroundColor="red"

})
btnVerde.addEventListener("click",function(){
    cuadrado.style.backgroundColor="green"

})