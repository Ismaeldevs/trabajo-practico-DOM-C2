const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");
btnAgregar.style.cursor = "pointer";


btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        aviso.textContent = "Ingrese un nombre";
        return;
    }
    aviso.textContent = "";
    const li = document.createElement("li");
    li.textContent = nombre;
    
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";
    btnQuitar.style.cursor = "pointer";
    
    btnQuitar.addEventListener("click", () => {
        li.remove();
    })
    
    li.appendChild(btnQuitar);
    listaInvitados.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();


});

