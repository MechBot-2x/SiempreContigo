const { enviarAlerta } = require('../servicios/emergencias');

async function detectarCaida(datos) {
  if (!datos || typeof datos.aceleracion !== 'number' || typeof datos.timestamp !== 'number') {
    throw new Error('Datos de entrada inválidos.');
  }

  const { aceleracion, timestamp } = datos;
  const UMBRAL_CAIDA = 9.8; // Umbral de detección de caída

  if (aceleracion >= UMBRAL_CAIDA) {
    console.log(`[${new Date(timestamp).toISOString()}] Caída detectada. Aceleración: ${aceleracion} m/s²`);
    await enviarAlerta({ mensaje: '¡Caída detectada!', aceleracion, timestamp });
  } else {
    console.log(`[${new Date(timestamp).toISOString()}] No se detectó caída. Aceleración: ${aceleracion} m/s²`);
  }
}

module.exports = { detectarCaida };
