function verificarCompatibilidad() {
    if ('AbsoluteOrientationSensor' in window) {
        console.log('API de Sensores de Movimiento compatible.');
        return true;
    } else {
        console.error('API de Sensores de Movimiento no compatible.');
        alert('Tu dispositivo no soporta la detección de caídas.');
        return false;
    }
}

let sensor;

async function inicializarSensor() {
    sensor = new AbsoluteOrientationSensor({ frequency: 60 });
    sensor.addEventListener('reading', () => {
        procesarDatosSensor(sensor.quaternion);
    });
    sensor.start();
    console.log('Sensor inicializado.');
}

function procesarDatosSensor(quaternion) {
    let haCaido = detectarCaidaSimulada(quaternion);

    if (haCaido) {
        enviarAlertaCaida();
    }
}

function detectarCaidaSimulada(quaternion) {
    // Implementa la lógica de detección de caídas aquí
    return false;
}

function enviarAlertaCaida() {
    const contactos = obtenerContactosEmergencia();
    contactos.forEach(contacto => {
        enviarSMS(contacto, '¡He sufrido una caída! Necesito ayuda.');
    });
    alert('¡Alerta de caída enviada!');
}

function obtenerContactosEmergencia() {
    // Implementa la lógica para obtener los contactos de emergencia del usuario
    return [{ nombre: 'Contacto 1', telefono: '123456789' }, { nombre: 'Contacto 2', telefono: '987654321' }];
}

function enviarSMS(contacto, mensaje) {
    // Implementa la lógica para enviar un SMS usando una API de terceros.
    console.log(`SMS enviado a ${contacto.nombre}: ${mensaje}`);
}

if (verificarCompatibilidad()) {
    inicializarSensor();
}

