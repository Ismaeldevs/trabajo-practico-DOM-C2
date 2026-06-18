const tarjeta = document.getElementById("tarjeta");
const btn = document.getElementById("btn");
btn.style.cursor = "pointer";

btn.addEventListener("click", () => {
    tarjeta.classList.toggle("oculto")
});