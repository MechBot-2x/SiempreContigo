// Asistente virtual inteligente
export class AsistenteVirtual {
    constructor() {
        this.nombre = "Mimo";
    }

    saludar() {
        return `Hola, soy ${this.nombre}, tu asistente personal. ¿En qué puedo ayudarte?`;
    }

    recordar(tarea) {
        return `No olvides: ${tarea}`;
    }
}
