const  tarjeta = document.getElementById("paleta");
const  btnToggle = document.getElementById('bntToggle');
;

btnToggle.addEventListener('click', () => {
    tarjeta.classList.toggle('oculto');
    if (tarjeta.classList.contains('oculto')) {
        btnToggle.textContent = 'Mostrar Tarjeta';
    }else {
        btnToggle.textContent = 'Ocultar Tarjeta';
    }
});
