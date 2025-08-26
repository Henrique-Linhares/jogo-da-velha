// Criação do elemento Square que irá compor o tabuleiro
import "./App.css";
import { useState } from "react";

function Square() {
  const [valor, setValor] = useState(null);

  function handleClick() {
    setValor("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro() {
  return (
    <div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
