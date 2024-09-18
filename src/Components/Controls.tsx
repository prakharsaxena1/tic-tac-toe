import React from "react";
import { useBoardStore, useGameStore } from "./store/store";

const Controls: React.FC = () => {
  const { toggleDisableClick, toggleAnimationEffect } = useBoardStore();
  const { resetGame } = useGameStore();
  return (
    <div className="p-2 my-4 justify-center flex flex-row gap-4">
      <button
        className="rounded dark:bg-orange-500 bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg dark:hover:bg-orange-600 hover:bg-slate-700"
        onClick={() => {
          resetGame();
          toggleDisableClick(false);
          toggleAnimationEffect(true);
        }}
      >
        Start new game
      </button>
      <button
        className="rounded dark:bg-orange-500 bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg dark:hover:bg-orange-600 hover:bg-slate-700"
        onClick={() => {
          toggleAnimationEffect(true);
          toggleDisableClick(false);
        }}
      >
        Reset board
      </button>
    </div>
  );
};

export default Controls;
