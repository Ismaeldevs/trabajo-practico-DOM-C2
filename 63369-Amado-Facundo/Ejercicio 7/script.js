const btnGenerar = document.getElementById("btnGenerar")
const inputNombre = document.getElementById("inpNombre")
const inputProfesion = document.getElementById("inpProfesion")
const inputColor = document.getElementById("inpColor")
const contenedor = document.getElementById("resultados")
const avisoP = document.getElementById("avisoP")

btnGenerar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim()
    const profesion = inputProfesion.value.trim()
    const color = inputColor.value

    
    if (!nombre || !profesion) {
        avisoP.textContent = "Completá todos los campos"
        return
    }

    avisoP.textContent = ""

    
    const tarjeta = document.createElement("div")
    tarjeta.style.border = "4px solid " + color
    tarjeta.style.borderRadius = "8px"
    tarjeta.style.padding = "12px"
    tarjeta.style.marginTop = "10px"

    
    const h2 = document.createElement("h2")
    h2.textContent = nombre

    
    const p = document.createElement("p")
    p.textContent = profesion

    
    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar tarjeta"
    btnEliminar.addEventListener("click", function() {
        tarjeta.remove()
    })


    tarjeta.appendChild(h2)
    tarjeta.appendChild(p)
    tarjeta.appendChild(btnEliminar)
    contenedor.appendChild(tarjeta)
})