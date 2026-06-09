const cuadrado=document.getElementById("cuadrado")
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green= document.getElementById("green");

red.addEventListener("click" , function() {
cuadrado.style.backgroundColor="red";
});

yellow.addEventListener("click" , function() {
cuadrado.style.backgroundColor="yellow";
});

green.addEventListener("click" , function() {
cuadrado.style.backgroundColor="green";
});



