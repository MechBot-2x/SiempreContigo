// src/ia/deteccion-caidas.js

const { enviarAlerta } = require('../servicios/emergencias');

/**
 * Detecta caídas utilizando datos de aceleración y envía una alerta si es necesario.
 * @param {object} datos - Objeto con datos de aceleración y timestamp.
 * @param {number} datos.aceleracion - Valor de aceleración en m/s².
 * @param {number} datos.timestamp - Timestamp de la medición.
 * @returns {Promise<void>} - Promesa que se resuelve cuando la detección y la alerta se completan.
 * @throws {Error} - Lanza un error si los datos de entrada son inválidos.
 */
async function detectarCaida(datos) {
  // Validación de datos de entrada
  if (!datos || typeof datos.aceleracion !== 'number' || typeof datos.timestamp !== 'number') {
    throw new Error('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
  }

  const { aceleracion, timestamp } = datos;
  const UMBRAL_CAIDA = 9.8; // Umbral de detección de caída (ajustable según sea necesario)

  try {
    // Lógica de detección de caída
    if (aceleracion >= UMBRAL_CAIDA) {
      console.log(`[${new Date(timestamp).toISOString()}] Caída detectada. Aceleración: ${aceleracion} m/s²`);
      await enviarAlerta({ mensaje: '¡Caída detectada!', aceleracion, timestamp });
    } else {
      console.log(`[${new Date(timestamp).toISOString()}] No se detectó caída. Aceleración: ${aceleracion} m/s²`);
    }
  } catch (error) {
    console.error(`Error al detectar caída o enviar alerta: ${error.message}`);
    // Considera lanzar el error nuevamente o manejarlo de otra manera según las necesidades del proyecto
  }
}

module.exports = { detectarCaida };
