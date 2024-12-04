import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winningCombinations";
import GameOver from "./components/GameOver/GameOver";
const gameBoardInitial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = gameBoardInitial.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      const turn = gameTurns.find(
        (t) => t.square.row === rowIndex && t.square.col === colIndex
      );
      return turn ? turn.player : null;
    })
  );
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const Second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];
    if (first && first == Second && first === third) {
      winner = first;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (
      gameTurns.some(
        (turn) => turn.square.row === rowIndex && turn.square.col === colIndex
      )
    ) {
      return;
    }

    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
    });
  };

  function handleReset() {
    setGameTurns([]);
  }
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player names="Player 1" symbol="X" iSActive={activePlayer === "X"} />
          <Player names="Player 2" symbol="O" iSActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleReset} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
