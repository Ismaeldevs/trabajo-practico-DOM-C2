const inputNombre = document.getElementById('inputNombre');
const listaInvitado = document.getElementById('listaInvitados');
const aviso = document.getElementById('aviso');
const btnAgregar = document.getElementById('btnAgregar');


btnAgregar.addEventListener ('click', () => {
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        return aviso.textContent = 'Por favor, ingresa un nombre válido.';
        aviso.style.color = 'red';
    }

    aviso.textContent = '';
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    const bntQuitar = document.createElement('button');
    bntQuitar.textContent = 'Quitar invitado';
    bntQuitar.addEventListener('click', () => {
        listaInvitado.removeChild(nuevoElemento);
    });
    nuevoElemento.appendChild(bntQuitar);
    listaInvitado.appendChild(nuevoElemento);
    inputNombre.value = '';
    inputNombre.focus();

})
