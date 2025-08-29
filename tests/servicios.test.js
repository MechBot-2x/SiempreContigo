<<<<<<< HEAD
// tests/servicios.test.js

const { detectarCaida, enviarAlerta } = require('../src/servicios/emergencias');

jest.mock('../src/servicios/emergencias', () => ({
  enviarAlerta: jest.fn(),
  detectarCaida: jest.requireActual('../src/servicios/emergencias').detectarCaida,
}));

describe('Funciones de Detección de Caídas', () => {
  describe('Reacción ante la aceleración', () => {
    it('Debería llamar a enviarAlerta si la aceleración es mayor o igual a 9.8 m/s²', async () => {
      const datos = { aceleracion: 10.0, timestamp: Date.now() };
      await detectarCaida(datos);
      expect(enviarAlerta).toHaveBeenCalled();
    });

    it('No debería llamar a enviarAlerta si la aceleración es inferior a 9.8 m/s²', async () => {
      const datos = { aceleracion: 9.7, timestamp: Date.now() };
      await detectarCaida(datos);
      expect(enviarAlerta).not.toHaveBeenCalled();
    });
  });

  describe('Entradas inválidas', () => {
    it('Debería lanzar error si los datos son null', async () => {
      await expect(detectarCaida(null)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });

    it('Debería lanzar error si los datos son undefined', async () => {
      await expect(detectarCaida(undefined)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });

    it('Debería lanzar error si falta la aceleración', async () => {
      const datos = { timestamp: Date.now() };
      await expect(detectarCaida(datos)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });

    it('Debería lanzar error si falta el timestamp', async () => {
      const datos = { aceleracion: 10.0 };
      await expect(detectarCaida(datos)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });

    it('Debería lanzar error si la aceleración no es un número', async () => {
      const datos = { aceleracion: 'alto', timestamp: Date.now() };
      await expect(detectarCaida(datos)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });

    it('Debería lanzar error si el timestamp no es un número', async () => {
      const datos = { aceleracion: 10.0, timestamp: 'ahora' };
      await expect(detectarCaida(datos)).rejects.toThrow('Datos de entrada inválidos: se requiere un objeto con aceleración y timestamp numéricos.');
    });
  });

  describe('Límite del umbral', () => {
    it('No debería alertar si la aceleración es igual al umbral (9.8 m/s²)', async () => {
      const datos = { aceleracion: 9.8, timestamp: Date.now() };
      await detectarCaida(datos);
      expect(enviarAlerta).not.toHaveBeenCalled();
    });
  });

  describe('Asincronía', () => {
    it('Debería manejar la asincronía de enviarAlerta correctamente', async () => {
      const datos = { aceleracion: 10.0, timestamp: Date.now() };
      enviarAlerta.mockResolvedValue(true);
      await detectarCaida(datos);
      expect(enviarAlerta).toHaveBeenCalledTimes(1);
      expect(enviarAlerta).toHaveBeenCalledWith(datos);
    });
=======
import { enviarAlerta } from "../src/servicios/emergencias.js";

describe("Servicios de Emergencia", () => {
  test("debería enviar alertas correctamente", () => {
    const resultado = enviarAlerta("Test de alerta");
    expect(resultado.success).toBe(true);
>>>>>>> caee153 (Implementación inicial del proyecto)
  });
});
