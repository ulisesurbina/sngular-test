import { obtenerFibonacci, obtenerTriangular, obtenerPrimo } from "../utils";

const Calculadora = (n) => {
  if (n < 2) throw new Error("El valor de n debe ser mayor o igual a 2");

  const fibonacci = obtenerFibonacci(n-2);
  const triangular = obtenerTriangular(n-2);
  const primo = obtenerPrimo(n-1);

//   console.log(fibonacci);
//   console.log(triangular);
//   console.log(primo);
  

  return (((2)*(fibonacci))*((3)*(triangular))+((7)*(primo)));
};

export default Calculadora;