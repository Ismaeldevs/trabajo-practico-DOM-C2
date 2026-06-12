let nombre = document.getElementById("inputNombre");
let agregar = document.getElementById("btnAgregar");
let lista = document.getElementById("listaInvitados");
let aviso = document.getElementById("aviso");

agregar.addEventListener("click", function () {
    let invitado = nombre.value.trim();

    if (invitado === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    aviso.textContent = "";

    let li = document.createElement("li");
    li.textContent = invitado + " ";

    let botonQuitar = document.createElement("button");
    botonQuitar.textContent = "Quitar";

    botonQuitar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(botonQuitar);
    lista.appendChild(li);

    nombre.value = "";
    nombre.focus();
});