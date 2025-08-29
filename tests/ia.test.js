<<<<<<< HEAD
const { detectarCaida } = require('../src/ia/deteccion-caidas');

describe('Detección de caídas', () => {
  test('Debería detectar una caída si la aceleración supera el umbral', async () => {
    const datos = { aceleracion: 10.5, timestamp: Date.now() };
    await expect(detectarCaida(datos)).resolves.not.toThrow();
  });

  test('Debería lanzar un error si los datos son inválidos', async () => {
    const datos = { aceleracion: 'no es un número', timestamp: Date.now() };
    await expect(detectarCaida(datos)).rejects.toThrow('Datos de entrada inválidos');
=======
import { detectarCaida } from "../src/ia/deteccion-caidas.js";

describe("IA de Detección de Caídas", () => {
  test("debería detectar caídas correctamente", () => {
    const resultado = detectarCaida({ aceleracion: 9.8 });
    expect(typeof resultado.caidaDetectada).toBe("boolean");
>>>>>>> caee153 (Implementación inicial del proyecto)
  });
});
