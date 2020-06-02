import React, { useState } from 'react'

import "./Game.css";
import { wonTheGame } from "../helpers";

import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = wonTheGame(board);

  const handleClick = i => {
    let newBoard = [ ...board];
    if (!winner && !newBoard[i]) {
      console.log("enter")
      newBoard[i] = xIsNext ? "X" : "O";
      setBoard(newBoard);
      setXisNext(xIsNext => !xIsNext);
    }
  };

  return (
    <div className="game">
      <h1>Tic Tact Toe</h1>
      <Board game={board} onClick={handleClick} />
      <div class="turn-message">
        <p>{ winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "x" : "o"}`}</p>
        <button class="start-game" onClick={() => setBoard(Array(9).fill(null))}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Game;