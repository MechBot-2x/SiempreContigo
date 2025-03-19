// Seguimiento de salud
export function registrarSignosVitales(presion, pulso) {
    const datos = {
        fecha: new Date().toLocaleString(),
        presion,
        pulso,
    };
    // Guardar en localStorage o enviar a un servidor
    localStorage.setItem('signosVitales', JSON.stringify(datos));
}
