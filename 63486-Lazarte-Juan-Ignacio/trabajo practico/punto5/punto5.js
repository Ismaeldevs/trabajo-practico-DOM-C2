const invitado=document.getElementById("invitado");
const agregar=document.getElementById("agregar");
const lista=document.getElementById("lista");
const aviso=document.getElementById("aviso");

agregar.addEventListener("click", () => {
    const nombre = invitado.value.trim();

    if (nombre) {
        const li = document.createElement("li");
        li.textContent = nombre;

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () => {
            lista.removeChild(li);
        });

        li.appendChild(eliminar);
        lista.appendChild(li);
        invitado.value = "";
        aviso.textContent = "";
    } else {
        aviso.textContent = "Por favor, ingresa un nombre";
    }
});