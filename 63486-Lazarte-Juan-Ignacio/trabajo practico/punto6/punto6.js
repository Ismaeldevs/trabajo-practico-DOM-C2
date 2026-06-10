const tarjeta = document.getElementById("tarjeta");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    const estaOculto = tarjeta.classList.toggle("oculto");

    if (estaOculto) {
        toggle.textContent = "Mostrar Tarjeta";
    } else {
        toggle.textContent = "Ocultar Tarjeta";
    }  
});