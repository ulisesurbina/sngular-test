import React from "react";

const Resultado = ({ resultado }) => {
  return (
    <div>
      <h2>Resultado</h2>
      <p>{resultado !== null ? `El resultado es: ${resultado}` : "Esperando cálculo..."}</p>
    </div>
  );
};

export default Resultado;