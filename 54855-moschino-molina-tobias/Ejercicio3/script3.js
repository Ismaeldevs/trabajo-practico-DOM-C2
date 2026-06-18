let user = document.getElementById("usuario");
let pass = document.getElementById("password");
let button = document.getElementById("btn");
let mensaje = document.getElementById("mensaje");

const usuario1 = "Luciano";
const password1 = "54321";

const limpiarIngresos=()=>{
    user.value="";
    pass.value="";
}

button.addEventListener("click", ()=>{
    if(user.value==="" || pass.value===""){
        alert("debe completar los campos");
        mensaje.textContent="debe completar todos los datos";
        mensaje.style.color="red";
        } else{
        if (user.value===usuario1 && pass.value===password1){
            alert("LOGIN EXITOSO");
        }  else{
            alert("usuario o clave incorrecto");
            limpiarIngresos();
        }
    }
});