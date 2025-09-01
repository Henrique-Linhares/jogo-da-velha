// Criação do elemento Square que irá compor o tabuleiro
import "./App.css";
import { useState } from "react";

function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    /**Se squares[i] é null o if não executa o return.
     * o handleClick continua a execução pois o return não
     * foi executado, o squares[i] era NULL!
     */
    if (squares[i]) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div>
        <Square
          valor={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          valor={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          valor={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div>
        <Square
          valor={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          valor={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          valor={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div>
        <Square
          valor={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          valor={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          valor={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
