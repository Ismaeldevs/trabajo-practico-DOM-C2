// Ejercicio 7 - Generador de tarjetas de perfil
// Crea dinámicamente tarjetas con nombre, profesión y color elegido por el usuario.
// Cada tarjeta tiene su propio botón para eliminarse del DOM.

// Seleccionamos los elementos del formulario
const inpNombre    = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor     = document.getElementById("inpColor");
const btnGenerar   = document.getElementById("btnGenerar");
const resultados   = document.getElementById("resultados");
const avisoP       = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function () {
  const nombre    = inpNombre.value.trim();
  const profesion = inpProfesion.value.trim();
  const color     = inpColor.value;

  // Validación: nombre y profesión son obligatorios
  if (nombre === "" || profesion === "") {
    avisoP.textContent = "Completa el nombre y la profesion.";
    return;
  }

  // Si llegamos aquí los datos son válidos, ocultamos cualquier aviso previo
  avisoP.textContent = "";

  // --- Construimos la tarjeta ---

  // Contenedor principal de la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.style.border        = "4px solid " + color;
  tarjeta.style.borderRadius  = "8px";
  tarjeta.style.padding       = "12px";
  tarjeta.style.marginTop     = "10px";
  // El borde izquierdo destaca el color favorito del usuario
  tarjeta.style.borderLeft    = "6px solid " + color;

  // <h3> con el nombre
  const h3 = document.createElement("h3");
  h3.textContent = nombre;

  // <p> con la profesión
  const p = document.createElement("p");
  p.textContent = profesion;

  // Botón para eliminar esta tarjeta específica
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar tarjeta";

  // Al hacer clic eliminamos la tarjeta completa del DOM.
  // "tarjeta" está en el mismo scope, así que el botón la puede acceder directamente.
  btnEliminar.addEventListener("click", function () {
    tarjeta.remove();
  });

  // Armamos la jerarquía: primero el h3, luego el p, por último el botón
  tarjeta.appendChild(h3);
  tarjeta.appendChild(p);
  tarjeta.appendChild(btnEliminar);

  // Insertamos la tarjeta terminada en el contenedor de resultados
  resultados.appendChild(tarjeta);
});
