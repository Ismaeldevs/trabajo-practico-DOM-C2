const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {
    const estaOculta = tarjeta.classList.toggle("oculto");

    if (estaOculta) {
        btnToggle.textContent = "Mostrar";
    }else{
        btnToggle.textContent = "Ocultar";
}
});