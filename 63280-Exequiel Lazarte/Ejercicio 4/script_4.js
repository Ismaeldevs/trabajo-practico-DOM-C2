const inputNombre = document.getElementById("Nombre");
const MostraNombre= document.getElementById("preview");

inputNombre.addEventListener("input" , () => {
    const nombre= inputNombre.value || "Nombre no ingresado";
    MostraNombre.textContent = `Hola, ${nombre}!`;
});