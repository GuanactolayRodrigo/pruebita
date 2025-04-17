export const mostrarDatos = () => {
    const nombre = document.querySelector('#nombreForm').value;
    const apellido = document.querySelector('#apellidoForm').value;
    const lu = document.querySelector('#luForm').value;
    
    if (!nombre || !apellido || !lu) {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Datos ingresados:\n' +
            'Nombre: ' + nombre + '\n' +
            'Apellido: ' + apellido + '\n' +
            'LU: ' + lu);
    }
}