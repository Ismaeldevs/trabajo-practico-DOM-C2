const InputUsuario = document.getElementById("usuario");
const InputContraseña = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

InputUsuario.addEventListener("input", () => {
  mensaje.textContent = "";
});
InputContraseña.addEventListener("input", () => {
  mensaje.textContent = "";
});

btnLogin.addEventListener("click", () => {
  const usuario = InputUsuario.value.trim();
  const contraseña = InputContraseña.value.trim();

  if (usuario === "" && contraseña === "") {
    mensaje.textContent = "Completa todos los campos";
    mensaje.style.color = "red";
  } else if (usuario === "admin" && contraseña === "1234") {
    mensaje.textContent = "¡Bienvenido, admin!";
    mensaje.style.color = "green";
    InputUsuario.value = "";
    InputContraseña.value = "";
  } else {
    mensaje.textContent = "Credenciales incorrectas.";
    mensaje.style.color = "red";
  }
});
