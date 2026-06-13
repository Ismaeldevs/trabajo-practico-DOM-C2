const cuadrado = document.getElementById ("cuadrado") ;
const btnRojo = document.getElementById ("btnRojo");
const btnAmarillo = document.getElementById ("btnAmarillo");
const btnVerde = document.getElementById ("btnVerde") ;
btnRojo.style.cursor = "pointer";
btnAmarillo.style.cursor = "pointer";
btnVerde.style.cursor = "pointer";
cuadrado.style.border = "2px solid ";


btnRojo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red" ;
});

btnAmarillo.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "yellow" ;
});    

btnVerde.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "green" ;
});
