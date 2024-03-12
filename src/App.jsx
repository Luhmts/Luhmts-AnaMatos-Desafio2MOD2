import './App.css'

import React, { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <h1>Contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
}