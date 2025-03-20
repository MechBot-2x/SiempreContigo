const { detectarCaida } = require('../src/ia/deteccion-caidas');
const { enviarAlerta } = require('../src/servicios/emergencias');

// Mock de la función enviarAlerta
jest.mock('../src/servicios/emergencias', () => ({
  enviarAlerta: jest.fn(),
}));

describe('Pruebas unitarias para detectarCaida', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpiar mocks antes de cada prueba
  });

  describe('Casos normales', () => {
    test('debe llamar a enviarAlerta cuando la aceleración supera el umbral', () => {
      const datosCaida = { aceleracion: 9.8 }; // Datos que simulan una caída
      detectarCaida(datosCaida);
      expect(enviarAlerta).toHaveBeenCalledTimes(1); // Verificar que se llamó a enviarAlerta
    });

    test('no debe llamar a enviarAlerta cuando la aceleración es menor al umbral', () => {
      const datosNoCaida = { aceleracion: 0 }; // Datos que no simulan una caída
      detectarCaida(datosNoCaida);
      expect(enviarAlerta).not.toHaveBeenCalled(); // Verificar que no se llamó a enviarAlerta
    });
  });

  describe('Manejo de errores', () => {
    test('debe lanzar un error cuando los datos son null', () => {
      expect(() => detectarCaida(null)).toThrow('Datos inválidos');
    });

    test('debe lanzar un error cuando los datos son undefined', () => {
      expect(() => detectarCaida(undefined)).toThrow('Datos inválidos');
    });
  });

  describe('Valores límite', () => {
    test('no debe llamar a enviarAlerta cuando la aceleración es igual al umbral', () => {
      const datosLimite = { aceleracion: 9.5 }; // Valor límite (umbral)
      detectarCaida(datosLimite);
      expect(enviarAlerta).not.toHaveBeenCalled(); // Verificar que no se llamó a enviarAlerta
    });
  });

  describe('Funciones asíncronas', () => {
    test('debe manejar correctamente funciones asíncronas', async () => {
      const datosCaida = { aceleracion: 9.8 }; // Datos que simulan una caída
      enviarAlerta.mockResolvedValue(true); // Mockear enviarAlerta como una promesa resuelta
      await detectarCaida(datosCaida); // Llamar a detectarCaida
      expect(enviarAlerta).toHaveBeenCalledTimes(1); // Verificar que se llamó a enviarAlerta
    });
  });
});
