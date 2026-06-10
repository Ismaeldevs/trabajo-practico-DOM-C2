const title = document.getElementById("titulo");
const button = document.getElementById("btn");


button.addEventListener("click", () => {
    title.textContent = "¡Bienvenido al DOOM!";
    title.style.color = "navy";
});