import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
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
        <GameBoard
          activePlayer={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
