import React, { useState } from 'react';
import './App.css';

type SquareValue = 'X' | 'O' | null;

const Calculator = () => {
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard: SquareValue[] = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: number) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <div className="status">{status}</div>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => renderSquare(index))}
      </div>
    </div>
  );
}

function calculateWinner(board: SquareValue[]): SquareValue | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export default Calculator;
