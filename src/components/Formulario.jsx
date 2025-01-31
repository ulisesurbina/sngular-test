import React, { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const [n, setN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (n.trim() === "" || parseInt(n) < 2) {
      alert("Introduce un número válido (n ≥ 2).");
      return;
    }
    onSubmit(parseInt(n));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingresa el valor de n:</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="n ≥ 2"
        />
        <button type="submit">Calcular</button>

      </div>
    </form>
  );
};

export default Formulario;