InputUser= document.getElementById("Usuario");
InputPass= document.getElementById("Contraseña");
Button= document.getElementById("Btn");
Mensaje= document.getElementById("mensaje");

Button.addEventListener("click", () => {
    if(InputUser.value === "admin" && InputPass.value === "1234"){
        Mensaje.textContent = "¡Bienvenido, admin!";
        Mensaje.style.color = "green";
    } else {
        Mensaje.textContent = "Usuario o contraseña incorrectos ";
        Mensaje.style.color = "red";    
    }
});
