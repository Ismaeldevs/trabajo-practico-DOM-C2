// const inputNombre = document.getElementById("input");
// const preview = document.getElementById("preview");

// inputNombre.addEventListener('input', function(){
//     if (this.value.trim() !== '') {
//     preview.textContent = `Hola, ${this.value}!`;
//   } else {
//     preview.textContent = 'Escribi tu nombre arriba';
//   }

// })

const input = document.getElementById("inputNombre");
const parrafo = document.getElementById("parrafo");

input.addEventListener('input',()=> {
    parrafo.textContent = `Hola, ${input.value}`;
});
