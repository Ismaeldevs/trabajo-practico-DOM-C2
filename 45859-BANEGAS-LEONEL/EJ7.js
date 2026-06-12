let nombre = document.getElementById("inpNombre");
let profesion = document.getElementById("inpProfesion");
let color = document.getElementById("inpColor");
let generar = document.getElementById("btnGenerar");
let resultados = document.getElementById("resultados");
let aviso = document.getElementById("avisoP");

generar.addEventListener("click", function () {
    let nom = nombre.value.trim();
    let prof = profesion.value.trim();
    let col = color.value;

    if (nom === "" || prof === "") {
        aviso.textContent = "Completá nombre y profesión.";
        return;
    }

    aviso.textContent = "";

    let tarjeta = document.createElement("div");
    tarjeta.style.borderLeft = "6px solid " + col;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";

    let titulo = document.createElement("h3");
    titulo.textContent = nom;

    let texto = document.createElement("p");
    texto.textContent = prof;

    let eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar tarjeta";

    eliminar.addEventListener("click", function () {
        tarjeta.remove();
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(eliminar);
    resultados.appendChild(tarjeta);

    nombre.value = "";
    profesion.value = "";
});