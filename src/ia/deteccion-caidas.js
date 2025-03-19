// Lógica para detectar caídas
export function detectarCaida(sensores) {
    if (sensores.aceleracion > 2.5) { // Ejemplo de umbral
        return true;
    }
    return false;
}
