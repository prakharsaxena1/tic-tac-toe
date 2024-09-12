export type GameState = {
  allGames: string[];
  // absoluteWinner: string;
  player1Wins: number;
  player2Wins: number;
  updateGames: (by: string) => void;
  // updateWinner: (absWinner: string) => void;
  updatePlayer1Wins: () => void;
  updatePlayer2Wins: () => void;
  resetGame: () => void;
};

export type BoardState = {
  board: ('X'|'O'|'')[][];
  turn: number;
  disableClick: boolean;
  updateBoard: (row: number, col: number, val: 'X' | 'O') => void;
  updateTurn: (newTurn: number) => void;
  resetBoard: () => void,
  toggleDisableClick: (val: boolean) => void,
};
