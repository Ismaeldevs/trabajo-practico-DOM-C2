const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaDeInvitados = document.getElementById("listaDeInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;

    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(btnQuitar);
    listaDeInvitados.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();
});