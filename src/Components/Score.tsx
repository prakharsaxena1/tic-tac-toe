import React from "react";
import { useBoardStore, useGameStore } from "./store/store";

const Score: React.FC = () => {
  const { allGames, player1Wins, player2Wins } = useGameStore();
  const { animationEffect } = useBoardStore();
  return (
    <div className="flex flex-col justify-center items-center pb-5">
      {/* Summary */}
      {player1Wins === player2Wins && player1Wins !== 0 && (
        <div className="text-center my-5">
          <span className="font-bold text-2xl">Draw</span>
        </div>
      )}
      {player1Wins !== player2Wins && (
        <div className="text-center my-5">
          <span className="font-bold text-2xl">Winner is: </span>
          <span className="font-bold text-2xl">
            {player1Wins > player2Wins ? "X" : "O"}
          </span>
        </div>
      )}
      {allGames.length > 0 && (
        <div className={`flex max-w-[95%] m-auto ${animationEffect && "animate-roto"}`}>
          <div>
            <div className="text-center border dark:border-white border-black p-2 w-[100px] h-[40px]">
              <span className="font-bold">Round</span>
            </div>
            <div className="text-center border dark:border-white border-black p-2 w-[100px] h-[40px]">
              <span className="font-bold">Winner</span>
            </div>
          </div>
          <div className="overflow-auto flex">
            {allGames.map((winner, index) => (
              <div key={index}>
                <div className="text-center border dark:border-white border-black p-2 w-[100px] h-[40px]">
                  <span>{index + 1}</span>
                </div>
                <div className="text-center border dark:border-white border-black p-2 w-[100px] h-[40px]">
                  <span>{winner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Score;
