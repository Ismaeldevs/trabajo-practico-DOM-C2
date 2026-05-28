document.addEventListener("DOMContentLoaded", () => {
    const inpNombre = document.getElementById("inpNombre");
    const inpProfesion = document.getElementById("inpProfesion");
    const inpColor = document.getElementById("inpColor");
    const btnCrear = document.getElementById("btnCrear");
    const pMensaje = document.getElementById("pMensaje");
    const resultado = document.getElementById("resultado");

    btnCrear.addEventListener("click", () => {
        const nombre = inpNombre.value.trim();
        const profesion = inpProfesion.value.trim();
        const color = inpColor.value.trim();

        if (nombre === "" || profesion === "" || color === "") {
            pMensaje.textContent = "Por favor, complete todos los campos.";
            return;
        }

        pMensaje.textContent = "";

        const tarjeta = document.createElement("div");
        tarjeta.style.padding = "10px";
        tarjeta.style.margin = "10px";
        tarjeta.style.borderRadius = "5px";
        tarjeta.style.color = "black";
        tarjeta.innerHTML = `<h3>${nombre}</h3><p>${profesion}</p>`;
        tarjeta.style.borderLeft = `6px solid ${color}`;
        resultado.appendChild(tarjeta);
        inpNombre.value = "";
        inpProfesion.value = "";
        const btnQuitar = document.createElement('button')
        btnQuitar.textContent = 'Quitar';
        tarjeta.appendChild(btnQuitar);
        btnQuitar.addEventListener('click', () => {
            resultado.removeChild(tarjeta);
        }); 
    });
});
