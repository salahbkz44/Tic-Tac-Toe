import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turns, onSelectSquare }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSelectSquare(rowIndex, columnIndex) {
  //     setGameBoard((prev) => {
  //       const newGameBoard = [...prev.map((innerArray) => [...innerArray])];
  //       if (newGameBoard[rowIndex][columnIndex] === null) {
  //         newGameBoard[rowIndex][columnIndex] = activePlayer;
  //       }
  //       return newGameBoard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => {
                return (
                  <li key={columnIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, columnIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
