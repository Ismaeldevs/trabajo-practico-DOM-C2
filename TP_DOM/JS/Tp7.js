const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnAgg = document.getElementById("btnAgg");
const resultado = document.getElementById("resultado");
const aviso = document.getElementById("aviso");
const Nuevodiv = document.createElement("div");
btnAgg.style.cursor = "pointer";

btnAgg.addEventListener("click", () => {
    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    

    if (nombre === "" || profesion === "") {
        aviso.textContent = "Rellenar los campos vacios";
        aviso.style.color = "red";
        return;
    } else {
        aviso.textContent = ""; 
    }

    const tarjeta = document.createElement("div");
    tarjeta.style.backgroundColor = inpColor.value;
    tarjeta.style.border = "1px solid black";
    tarjeta.style.padding = "10px";
    tarjeta.style.borderRadius = "10px";

    const h3 = document.createElement("h3");
    h3.textContent = nombre;
    const p = document.createElement("p");
    p.textContent = profesion;
    

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.cursor = "pointer";

    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });
    
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);
    resultado.appendChild(tarjeta);

    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();


    contenedor.appendChild(tarjeta);

});
    inpNombre.focus();