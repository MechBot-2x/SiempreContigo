import { enviarAlerta } from '../src/servicios/emergencias.js';

test('Envío de alerta', () => {
    expect(enviarAlerta("Prueba de alerta")).toBeUndefined();
});
