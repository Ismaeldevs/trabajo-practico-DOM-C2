const  tarjeta = document.getElementById("tarjeta1");
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
