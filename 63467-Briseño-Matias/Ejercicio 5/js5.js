const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        aviso.textContent = "El nombre no puede estar vacío.";
        return;
    }
    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.addEventListener("click", function () {
        listaInvitados.removeChild(li);
    });
    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);
    inputNombre.value = "";
    inputNombre.focus();
});
