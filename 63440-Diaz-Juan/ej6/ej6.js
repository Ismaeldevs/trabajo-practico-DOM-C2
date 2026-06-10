const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
  // toggle devuelve true si la clase quedó agregada (oculta)
  const estaOculta = tarjeta.classList.toggle("oculto");
  btnToggle.textContent = estaOculta ? "Mostrar" : "Ocultar";
});