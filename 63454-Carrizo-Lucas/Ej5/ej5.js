const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value;
  if (nombre === "") {
    aviso.textContent = "Ingrese Nombre";
    return;
  } else {
    aviso.textContent = "";
    const li = document.createElement("li");
    li.textContent = nombre;
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.addEventListener("click", () => {
      li.remove();
    });
    listaInvitados.appendChild(li);
    li.appendChild(btnQuitar);
    inputNombre.value = "";
    inputNombre.focus();
  }
});
