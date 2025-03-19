import { detectarCaida } from '../src/ia/deteccion-caidas.js';

test('Detección de caída', () => {
    const sensores = { aceleracion: 3.0 };
    expect(detectarCaida(sensores)).toBe(true);
});
