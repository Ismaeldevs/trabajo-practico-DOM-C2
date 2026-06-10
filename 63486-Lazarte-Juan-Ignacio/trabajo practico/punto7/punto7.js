const nombre = document.getElementById("nombre");
const profesion = document.getElementById("profession");
const color = document.getElementById("color");
const crearPerfil = document.getElementById("crearPerfil");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

crearPerfil.addEventListener("click", () => {
    const nombreValue = nombre.value.trim();
    const profesionValue = profesion.value.trim();
    const colorValue = color.value;

    if (nombreValue === "" || profesionValue === "") {
        avisoP.textContent = "Por favor, complete todos los campos.";
        return;
    }

    avisoP.textContent = "";

    const tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = "6px solid " + colorValue;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    tarjeta.style.backgroundColor = "#f5f5f5";

    const titulo = document.createElement("h2");
    titulo.textContent = nombreValue;

    const profesionP = document.createElement("p");
    profesionP.textContent = profesionValue;

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => {
        resultados.removeChild(tarjeta);
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(profesionP);
    tarjeta.appendChild(eliminarBtn);
    resultados.appendChild(tarjeta);

    nombre.value = "";
    profesion.value = "";
    color.value = "#ff0000";
});