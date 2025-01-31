export const obtenerFibonacci = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

  
export const obtenerTriangular = (n) => {
  if (n < 0) return 0;
  return (n * (n + 1)) / 2;
};

  
export const obtenerPrimo = (n) => {
  if (n < 1) return 0;
  const primos = [];
  let num = 2;

  while (primos.length < n) {
    if (esPrimo(num)) primos.push(num);
    num++;
  }

  return primos[n - 1];
};


const esPrimo = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};