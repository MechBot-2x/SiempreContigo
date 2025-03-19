// Gestión de recordatorios
export function agregarRecordatorio(tarea, fecha) {
    const recordatorio = {
        tarea,
        fecha,
    };
    // Guardar en localStorage o enviar a un servidor
    localStorage.setItem('recordatorios', JSON.stringify(recordatorio));
}
