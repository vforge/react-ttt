const board = (state = [], action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return [];
      
    case 'PLAYER_MOVE':
      const currentBoard = state.slice(0);
      const index = action.index;

      // already taken, skip
      if (currentBoard.some(item => item.index === index)) {
        return state;
      }

      // can be marked, valid
      currentBoard.push({
        index,
        player: action.player
      });
      
      return currentBoard;
    default:
      return state
  }
}

export default board;