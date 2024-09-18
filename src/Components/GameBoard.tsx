import React from "react";
import { useBoardStore, useGameStore } from "./store/store";

const checkWinner = (board: string[][]) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return board[i][0];
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    }
  }
  // Check diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return board[0][2];
  }
  // No winner yet
  return null;
};

const colorMap = {
  'X': 'text-red-500',
  'O': 'text-green-600',
  '': '',
}

const GameBoard: React.FC = () => {
  const { board, turn, updateBoard, updateTurn, disableClick, toggleDisableClick, animationEffect, toggleAnimationEffect, resetBoard } = useBoardStore();
  const { updateGames, updatePlayer1Wins, updatePlayer2Wins } = useGameStore();
  const handleClick = (row: number, col: number) => {
    if (disableClick) {
      alert('Game is over\nStart a new game or reset the board for next round');
      return;
    }
    if (board[row][col] !== '') return;
    const val = turn === 0 ? "X" : "O";
    updateTurn((turn + 1) % 2);
    updateBoard(row, col, val);
    const winner = checkWinner(board);
    if (winner !== null && winner !== '') {
      updateGames(winner);
      toggleDisableClick(true);
      if (winner === 'X') {
        updatePlayer1Wins();
      } else {
        updatePlayer2Wins();
      }
    }
  };
  return (
    <div className="flex flex-col items-center">
      {/* Player turn */}
      <div className="">
        <span className="text-2xl font-semibold">Player </span>
        <span className={`text-2xl italic font-bold ${turn === 0 ? 'text-red-500' : 'text-green-600'}`}>{turn === 0 ? 'X' : 'O'}</span>
        <span className="text-2xl font-semibold">'s turn</span>
      </div>
      {/* Board */}
      <div
        className={`shadow-2xl m-5 rounded-md ${animationEffect && "animate-roto"}`}
        onAnimationEnd={() => {
          toggleAnimationEffect(false);
          resetBoard();
        }}
      >
        <div className="m-4 w-[300px] h-[300px] flex flex-wrap">
          <div className="border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(0, 0)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[0][0]]}`}>{board[0][0]}</span>
          </div>
          <div className="border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(0, 1)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[0][1]]}`}>{board[0][1]}</span>
          </div>
          <div className="border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(0, 2)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[0][2]]}`}>{board[0][2]}</span>
          </div>
          <div className="border-t border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(1, 0)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[1][0]]}`}>{board[1][0]}</span>
          </div>
          <div className="border-t border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(1, 1)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[1][1]]}`}>{board[1][1]}</span>
          </div>
          <div className="border-t border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(1, 2)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[1][2]]}`}>{board[1][2]}</span>
          </div>
          <div className="border-t border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(2, 0)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[2][0]]}`}>{board[2][0]}</span>
          </div>
          <div className="border-t border-r border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(2, 1)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[2][1]]}`}>{board[2][1]}</span>
          </div>
          <div className="border-t border-collapse border-black w-[100px] h-[100px] justify-center items-center flex" onClick={() => handleClick(2, 2)}>
            <span className={`text-5xl transition-opacity duration-500 ${animationEffect && "animate-ghost"} ${colorMap[board[2][2]]}`}>{board[2][2]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
