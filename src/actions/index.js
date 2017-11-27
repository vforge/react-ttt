export const playerMove = (index) => (
  {
    type: 'PLAYER_MOVE',
    index,
  }
);

export const validateBoard = (board) => (
  {
    type: 'VALIDATE_BOARD',
    board,
  }
);

export const resetGame = () => (
  {
    type: 'RESET_GAME',
  }
);