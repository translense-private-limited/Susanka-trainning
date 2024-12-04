import React from "react";

const GameOver = ({ winner ,onRestart}) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Its a draw</p>}
      <button onClick={onRestart}>Reset</button>
    </div>
  );
};

export default GameOver;
