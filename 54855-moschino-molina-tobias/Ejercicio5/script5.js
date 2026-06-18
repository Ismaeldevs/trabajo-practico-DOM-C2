// Enunciado
// Construí una lista de invitados dinámica:
// • Al escribir un nombre y hacer clic en Agregar, se debe crear un <li> con ese
// nombre y agregarlo a la lista.
// • No se pueden agregar nombres vacíos (mostrar un mensaje de aviso y no
// agregar nada).
// • Cada <li> debe tener un botón Quitar que, al hacer clic, elimina solo ese
// elemento de la lista.
// • Después de agregar, el campo de texto debe quedar vacío y con el foco.

let nombre = document.getElementById("inputNombre");
let btn_agregar = document.getElementById("btnAgregar");
let aviso = document.getElementById("aviso");
let lista = document.getElementById("listaInvitados");

btn_agregar.addEventListener("click", ()=>{
    if(nombre.value.trim()!=""){
        aviso.textContent="Debe ingresar un nombre";

        let li = document.createElement("li");

li.textContent = nombre.value; 

lista.appendChild(li);

nombre.value = "";
aviso.textContent = "";

li.innerHTML += '<button id="btnEliminar">Eliminar</button>';
let btnEliminar = document.querySelector("#btnEliminar");

btnEliminar.addEventListener("click", ()=>{
    lista.removeChild(li);});
    
    }else{
        aviso.textContent="No puede estar vacío";
    }
});
