const titulo = document.getElementById("titulo");
const boton = document.getElementById("cambiar");

boton.addEventListener("click", () => {
    titulo.style.color = "navy";
    titulo.textContent = "Bienvenido al DOM";
});