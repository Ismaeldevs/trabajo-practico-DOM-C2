const inpNombre = document.getElementById ("inpNombre") 
const inpProfesion = document.getElementById ("inpProfesion") 
const inpColor = document.getElementById ("inpColor") 
const btnGenerar = document.getElementById ("btnGenerar")
const resultados = document.getElementById ("resultados")
const avisoP = document.getElementById ("avisoP")

btnGenerar.addEventListener("click", function () {
const nombre = inpNombre.value.trim()
const profesion = inpProfesion.value.trim() 
const color = inpColor.value

// Validar que nombre y profesi ón no est én vac íos
if (nombre === "" || profesion === "") {
    avisoP.textContent = "Completa el nombre y la profesion"
    return
}
avisoP.textContent = ""

// Crear la tarjeta
const tarjeta = document.createElement("div")
tarjeta.style.borderLeft = "6px solid " + color
tarjeta.style.padding = "12px"
tarjeta.style.marginTop = "10px"

// Crear el <h3> con el nombre
const titulo = document.createElement("h3")
titulo.textContent = nombre

// Crear el <p> con la profesión
const textoProfesion = document.createElement("p")
textoProfesion.textContent = profesion

// Crear el botón " Eliminar tarjeta "
const btnEliminar = document.createElement("button")
btnEliminar.textContent = "Eliminar tarjeta"

btnEliminar.addEventListener("click", function() {
    tarjeta.remove()
})

// Armar la jerarqu ía y agregar al DOM
tarjeta.appendChild(titulo)
tarjeta.appendChild(textoProfesion)
tarjeta.appendChild(btnEliminar)
resultados.appendChild(tarjeta)

})