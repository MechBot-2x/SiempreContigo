
const { detectarCaida } = require('../src/ia/deteccion-caidas');
const { enviarAlerta } = require('../src/servicios/emergencias');

// Mock de la función enviarAlerta
jest.mock('../src/servicios/emergencias', () => ({
  enviarAlerta: jest.fn(),
}));

describe('Pruebas unitarias para la función detectarCaida en servicios.test.js', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpiar mocks antes de cada prueba para asegurar la independencia
  });

  describe('Comportamiento en condiciones normales', () => {
    it('Debería invocar enviarAlerta si la aceleración supera el umbral de caída', async () => {
      const datosCaida = { aceleracion: 10.0, timestamp: Date.now() }; // Aceleración superior al umbral
      await detectarCaida(datosCaida);
      expect(enviarAlerta).toHaveBeenCalledTimes(1);
      expect(enviarAlerta).toHaveBeenCalledWith({ mensaje: '¡Caída detectada!', aceleracion: 10.0, timestamp: expect.any(Number) });
    });

    it('No debería invocar enviarAlerta si la aceleración está por debajo del umbral', async () => {
      const datosNormales = { aceleracion: 5.0, timestamp: Date.now() }; // Aceleración inferior al umbral
      await detectarCaida(datosNormales);
      expect(enviarAlerta).not.toHaveBeenCalled();
    });
  });

  describe('Manejo de entradas inválidas', () => {
    it('Debería lanzar un error si los datos son null', async () => {
      await expect(detectarCaida(null)).rejects.toThrow('Datos de entrada inválidos.');
    });

    it('Debería lanzar un error si los datos son undefined', async () => {
      await expect(detectarCaida(undefined)).rejects.toThrow('Datos de entrada inválidos.');
    });

    it('Debería lanzar un error si los datos no contienen aceleración', async () => {
      const datosIncompletos = { timestamp: Date.now() };
      await expect(detectarCaida(datosIncompletos)).rejects.toThrow('Datos de entrada inválidos.');
    });

    it('Debería lanzar un error si los datos no contienen timestamp', async () => {
      const datosIncompletos = { aceleracion: 10.0 };
      await expect(detectarCaida(datosIncompletos)).rejects.toThrow('Datos de entrada inválidos.');
    });

    it('Debería lanzar un error si la aceleración no es un número', async () => {
      const datosTipoIncorrecto = { aceleracion: 'alto', timestamp: Date.now() };
      await expect(detectarCaida(datosTipoIncorrecto)).rejects.toThrow('Datos de entrada inválidos.');
    });

    it('Debería lanzar un error si el timestamp no es un número', async () => {
      const datosTipoIncorrecto = { aceleracion: 10.0, timestamp: 'ahora' };
      await expect(detectarCaida(datosTipoIncorrecto)).rejects.toThrow('Datos de entrada inválidos.');
    });
  });

  describe('Comportamiento en el límite del umbral', () => {
    it('No debería invocar enviarAlerta si la aceleración es exactamente el umbral', async () => {
      const datosLimite = { aceleracion: 9.7, timestamp: Date.now() }; // Aceleración igual al umbral
      await detectarCaida(datosLimite);
      expect(enviarAlerta).not.toHaveBeenCalled();
    });
  });

  describe('Pruebas de asincronía', () => {
    it('Debería manejar correctamente la asincronía de enviarAlerta', async () => {
      const datosCaida = { aceleracion: 10.0, timestamp: Date.now() };
      enviarAlerta.mockResolvedValue(true); // Simula que enviarAlerta se resuelve correctamente
      await detectarCaida(datosCaida);
      expect(enviarAlerta).toHaveBeenCalled();
    });
  });
});
