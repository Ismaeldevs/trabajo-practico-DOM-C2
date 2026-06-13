const titulo = document.getElementById("titulo");
const Btn = document.getElementById("Btn");
Btn.style.cursor = "pointer";

Btn.addEventListener("click", () => {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";

}); 

console.log*("Hola, soy un mensaje en la consola");