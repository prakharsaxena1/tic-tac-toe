import React from "react";
import { useBoardStore, useGameStore } from "./store/store";

const Controls: React.FC = () => {
  const { resetBoard, toggleDisableClick } = useBoardStore();
  const { resetGame } = useGameStore();
  return (
    <div className="p-2 my-4 justify-center flex flex-row gap-4">
      <button
        className="rounded bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700"
        onClick={() => {
          resetGame();
          resetBoard();
          toggleDisableClick(false);
        }}
      >
        Start new game
      </button>
      <button
        className="rounded bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700"
        onClick={() => {
          resetBoard();
          toggleDisableClick(false);
        }}
      >
        Reset board
      </button>
    </div>
  );
};

export default Controls;
