const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
  const nombre = inpNombre.value.trim();
  const profesion = inpProfesion.value.trim();
  const color = inpColor.value;

  // Validar que nombre y profesión no estén vacíos
  if (nombre === "" || profesion === "") {
    avisoP.textContent = "Completá nombre y profesión.";
    return;
  }
  avisoP.textContent = "";

  // Crear la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.style.borderLeft = "6px solid " + color;
  tarjeta.style.borderRadius = "8px";
  tarjeta.style.padding = "12px";
  tarjeta.style.marginTop = "10px";

  // Crear el <h3> con el nombre
  const h3 = document.createElement("h3");
  h3.textContent = nombre;

  // Crear el <p> con la profesión
  const p = document.createElement("p");
  p.textContent = profesion;

  // Crear el botón "Eliminar tarjeta"
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar tarjeta";
  btnEliminar.addEventListener("click", function () {
    tarjeta.remove();
  });

  // Armar la jerarquía (orden: h3, p, botón) y agregar al DOM
  tarjeta.appendChild(h3);
  tarjeta.appendChild(p);
  tarjeta.appendChild(btnEliminar);
  resultados.appendChild(tarjeta);

  // Limpiar campos
  inpNombre.value = "";
  inpProfesion.value = "";
});