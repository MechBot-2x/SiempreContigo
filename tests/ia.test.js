// tests/ia.test.js
import { detectarCaida } from '../src/ia/deteccion-caidas.js';

describe('detección de caídas', () => {
  it('debería detectar una caída cuando la aceleración es alta', () => {
    const sensores = { aceleracion: 10 };
    expect(detectarCaida(sensores)).toBe(true);
  });

  it('no debería detectar una caída cuando la aceleración es normal', () => {
    const sensores = { aceleracion: 2 };
    expect(detectarCaida(sensores)).toBe(false);
  });

  it('debería manejar valores de entrada inválidos', () => {
    const sensores = { aceleracion: 'abc' };
    expect(detectarCaida(sensores)).toBe(false);
  });

  it('debería detectar una caída con aceleración de 3.0 si es el umbral', () => {
    const sensores = { aceleracion: 3.0 };
    expect(detectarCaida(sensores)).toBe(true);
  });

  it('debería manejar valores negativos de aceleración', () => {
    const sensores = { aceleracion: -5 };
    expect(detectarCaida(sensores)).toBe(false); // O el comportamiento esperado
  });

  it('debería manejar valores de aceleración muy grandes', () => {
    const sensores = { aceleracion: 1000 };
    expect(detectarCaida(sensores)).toBe(true); // O el comportamiento esperado
  });

  it('debería manejar valores decimales de aceleración', () => {
    const sensores = { aceleracion: 3.5 };
    expect(detectarCaida(sensores)).toBe(true); // O el comportamiento esperado
  });

  it('debería manejar la ausencia de datos de aceleración', () => {
    const sensores = {};
    expect(detectarCaida(sensores)).toBe(false); // O el comportamiento esperado
  });

  it('debería manejar datos de aceleración nulos', () => {
    const sensores = { aceleracion: null };
    expect(detectarCaida(sensores)).toBe(false); // O el comportamiento esperado
  });

  it('debería manejar datos de aceleración indefinidos', () => {
    const sensores = { aceleracion: undefined };
    expect(detectarCaida(sensores)).toBe(false); // O el comportamiento esperado
  });
});
