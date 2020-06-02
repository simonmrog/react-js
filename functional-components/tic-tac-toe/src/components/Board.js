import React from 'react';

import "./Board.css";

import Square from "./Square";

const Board = ({ game, onClick }) => (
  <div className="board">
    { game.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />)
    )}
  </div>
);

export default Board;