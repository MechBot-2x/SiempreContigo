document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const nombreUsuario = document.getElementById('nombre-usuario');
    const botonPanico = document.getElementById('boton-panico');
    const botonesSeccion = {
        asistenteVirtual: document.getElementById('asistente-virtual'),
        seguimientoSalud: document.getElementById('seguimiento-salud'),
        conexionSocial: document.getElementById('conexion-social'),
        actividades: document.getElementById('actividades')
    };
    const secciones = {
        inicio: document.getElementById('inicio'),
        seguimientoSalud: document.getElementById('seguimiento-salud'),
        asistenteVirtual: document.getElementById('asistente-virtual'),
        conexionSocial: document.getElementById('conexion-social'),
        actividades: document.getElementById('actividades')
    };

    // Función para mostrar una sección y ocultar las demás
    const mostrarSeccion = (seccionId) => {
        Object.values(secciones).forEach(seccion => {
            seccion.style.display = 'none';
        });
        secciones[seccionId].style.display = 'block';
    };

    // Event listeners para los botones de sección
    botonesSeccion.asistenteVirtual.addEventListener('click', () => mostrarSeccion('asistenteVirtual'));
    botonesSeccion.seguimientoSalud.addEventListener('click', () => mostrarSeccion('seguimientoSalud'));
    botonesSeccion.conexionSocial.addEventListener('click', () => mostrarSeccion('conexionSocial'));
    botonesSeccion.actividades.addEventListener('click', () => mostrarSeccion('actividades'));

    // Event listener para el botón de pánico
    botonPanico.addEventListener('click', () => {
        alert('¡Alerta de pánico enviada!');
        // Aquí puedes agregar la lógica para enviar una alerta real
    });

    // Inicialización: Mostrar la sección de inicio
    mostrarSeccion('inicio');

    // Simulación de obtener el nombre del usuario (reemplazar con lógica real)
    const usuario = { nombre: 'Usuario Ejemplo' };
    nombreUsuario.textContent = usuario.nombre;
});

