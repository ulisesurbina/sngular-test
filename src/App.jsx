import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Calculadora from "./components/Calculadora";
import Resultado from "./components/Resultado";

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleCalculo = (n) => {
    const resultadoSerie = Calculadora(n);
    setResultado(resultadoSerie);
  };

  return (
    <div className="App">
      <h1>Cálculo de la Serie</h1>
      <Formulario onSubmit={handleCalculo} />
      <Resultado resultado={resultado} />
    </div>
  );
};

export default App;