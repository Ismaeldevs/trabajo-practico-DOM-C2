console.log("Ejercicio 7 - Tarjetas de presentación");

const inputNombre = document.getElementById("inpNombre");
const inputProfesion = document.getElementById("inpProfesion");
const inputColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");
btnGenerar.style.cursor = "pointer";

btnGenerar.addEventListener("click",() => {
    const nombre = inputNombre.value.trim();
    const profesion = inputProfesion.value.trim();
    const color = inputColor.value;

    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Por favor, completa el nombre y la profesión.";
    }
    else{
    const tarjeta = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btnEliminar = document.createElement("button");

    tarjeta.style.border = "4px solid " + color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    h3.textContent = nombre;
    p.textContent = profesion;
    btnEliminar.textContent = "Eliminar tarjeta";
    
    resultados.appendChild(tarjeta);
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);

    avisoP.textContent = "";
    
    btnEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });
}

}); 
