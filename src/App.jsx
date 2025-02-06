import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbole="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbole="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard turns={gameTurn} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
