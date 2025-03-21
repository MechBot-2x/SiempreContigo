// src/utils/helpers.js

/**
 * Función de utilidad para formatear fechas.
 * @param {Date} fecha - Objeto Date a formatear.
 * @returns {string} - Fecha formateada en formato YYYY-MM-DD HH:MM:SS.
 */
function formatearFecha(fecha) {
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  const horas = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');
  return `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
}

module.exports = {
  formatearFecha,
};

