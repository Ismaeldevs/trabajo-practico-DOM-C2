let tarjeta = document.getElementById("tarjeta");
let boton = document.getElementById("btnToggle");

boton.addEventListener("click", function () {

    let estado = tarjeta.classList.toggle("oculto");

    if (estado) {

        boton.textContent = "Mostrar";

    } else {

        boton.textContent = "Ocultar";

    }

});