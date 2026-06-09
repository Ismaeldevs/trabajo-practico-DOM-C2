const titulo=document.getElementById("titulo");
const btnCambiar=document.getElementById ("btnCambiar");
btnCambiar.addEventListener ("click", function() {
    // 1. Cambi á el textContent del título
titulo.textContent = " Nuevo Título ";
// 2. Cambi á el color del título a "navy"
titulo.style.color = " navy ";
}) ;

