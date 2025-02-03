import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbole="X" />
          <Player initialName="Player2" symbole="O" />
        </ol>
        GAME
      </div>
      LOG
    </main>
  );
}

export default App;
