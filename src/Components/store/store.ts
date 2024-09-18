import { create } from "zustand";
import { BoardState, GameState } from "./store.interface";

export const useGameStore = create<GameState>()((set) => ({
  allGames: [],
  player1Wins: 0,
  player2Wins: 0,
  updateGames: (roundWinner) =>
    set((state) => ({ allGames: [...state.allGames, roundWinner] })),
  updatePlayer1Wins: () =>
    set((state) => ({ player1Wins: state.player1Wins + 1 })),
  updatePlayer2Wins: () =>
    set((state) => ({ player2Wins: state.player2Wins + 1 })),
  resetGame: () =>
    set(() => ({
      allGames: [],
      absoluteWinner: "",
      player1Wins: 0,
      player2Wins: 0,
    })),
}));

export const useBoardStore = create<BoardState>()((set) => ({
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  turn: 0,
  disableClick: false,
  animationEffect: false,
  updateBoard: (row, col, val) =>
    set((state) => {
      state.board[row][col] = val;
      return { ...state };
    }),
  resetBoard: () =>
    set(() => {
      return {
        board: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        turn: 0,
      };
    }),
  updateTurn: (t) => set((state) => ({ ...state, turn: t })),
  toggleDisableClick: (val) => set(() => ({ disableClick: val })),
  toggleAnimationEffect: (val) => set(() => ({ animationEffect: val })),
}));
