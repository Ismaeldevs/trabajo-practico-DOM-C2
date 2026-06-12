const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Por favor, ingresa un nombre.";
        return;
    }

    aviso.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function() {
        listaInvitados.removeChild(li);
    });

    li.appendChild(btnEliminar);
    listaInvitados.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();
});