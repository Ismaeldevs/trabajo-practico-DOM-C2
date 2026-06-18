const tarjeta = document.getElementById('tarjeta');
const btnToggle = document.getElementById('btnToggle');

        btnToggle.addEventListener('click', () => {
            tarjeta.classList.toggle('oculto');
            btnToggle.textContent = tarjeta.classList.contains('oculto') ? 'Mostrar' : 'Ocultar';
        });