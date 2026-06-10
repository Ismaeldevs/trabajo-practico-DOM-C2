const tarjeta = document.getElementById("tarjeta");

const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {

    const ahoraOculto = tarjeta.classList.toggle("oculto");

    if (ahoraOculto) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }

});