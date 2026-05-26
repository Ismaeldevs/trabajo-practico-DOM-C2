// Ejercicio 5 - Lista de invitados dinámica
// Permite agregar nombres a una lista <ul> y eliminar cada elemento individualmente.

// Seleccionamos los elementos del DOM
const inputNombre    = document.getElementById("inputNombre");
const btnAgregar     = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso          = document.getElementById("aviso");

// Al hacer clic en "Agregar" procesamos el nombre ingresado
btnAgregar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();

  // Validación: no se permiten nombres vacíos
  if (nombre === "") {
    aviso.textContent = "Ingresa un nombre.";
    return; // salimos sin crear ningún elemento
  }

  // Ocultamos el aviso si había uno de una operación anterior
  aviso.textContent = "";

  // 1. Creamos el elemento <li>
  const li = document.createElement("li");

  // 2. Le asignamos el nombre como texto del <li>
  li.textContent = nombre;

  // 3. Creamos el botón "Quitar" para este invitado específico
  const btnQuitar = document.createElement("button");
  btnQuitar.textContent = " Quitar";

  // 4. Al hacer clic en "Quitar", eliminamos solo el <li> que lo contiene.
  //    Como "li" fue declarado en este mismo scope, el botón puede accederlo
  //    directamente gracias al cierre (closure) de JavaScript.
  btnQuitar.addEventListener("click", function () {
    li.remove();
  });

  // 5. Insertamos el botón dentro del <li>
  li.appendChild(btnQuitar);

  // 6. Insertamos el <li> al final de la lista
  listaInvitados.appendChild(li);

  // 7. Limpiamos el campo y devolvemos el foco para que el usuario pueda
  //    seguir escribiendo sin necesidad de hacer clic de nuevo
  inputNombre.value = "";
  inputNombre.focus();
});
