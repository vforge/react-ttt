export const playerMove = (index, player) => (
  {
    type: 'PLAYER_MOVE',
    index,
    player,
  }
);

export const aiMove = (player) => (
  {
    type: 'AI_MOVE',
    player,
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