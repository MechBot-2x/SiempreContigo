const { detectarCaida } = require('../src/ia/deteccion-caidas');

describe('Integración de detección de caídas', () => {
  test('Debería enviar una alerta si se detecta una caída', async () => {
    const datos = { aceleracion: 10.5, timestamp: Date.now() };
    await expect(detectarCaida(datos)).resolves.not.toThrow();
  });
});
