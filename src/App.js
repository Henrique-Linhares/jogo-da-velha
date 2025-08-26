// Criação do elemento Square que irá compor o tabuleiro
import "./App.css";
import { useState } from "react";

function Square({valor, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
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
