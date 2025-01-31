import Calculadora from "../components/Calculadora";

describe("Pruebas del cálculo de la serie", () => {
  const casosPrueba = [
    { n: 2, esperado: 14 },
    { n: 3, esperado: 27 },
    { n: 4, esperado: 53 },
    { n: 5, esperado: 121 },
    { n: 6, esperado: 257 },
    { n: 7, esperado: 541 },
    { n: 8, esperado: 1127 },
    { n: 9, esperado: 2317 },
    { n: 10, esperado: 4697 },
    { n: 11, esperado: 9383 },
  ];

  test("Debe calcular correctamente los primeros 10 términos", () => {
    casosPrueba.forEach(({ n, esperado }) => {
      expect(Calculadora(n)).toBe(esperado);
    });
  });
});
