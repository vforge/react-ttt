const board = (state = [], action) => {
  switch (action.type) {
    case 'RESET_GAME': {
      return [];
    }
    case 'AI_MOVE': {
      // @TODO AI WILL BE HERE, for now it's just random
      let validIndices = '012345678'.split('');
      
      // filter alstready used indices
      if (state.length) {
        const usedIndices = state.map(item => item.index);
        
        validIndices = validIndices.filter(
          item => usedIndices.indexOf(parseInt(item, 10)) === -1
        );
      }
      
      const currentBoard = state.slice(0);
      currentBoard.push({
        index: parseInt(validIndices[Math.floor(Math.random() * validIndices.length)], 10),
        player: action.player,
      });
      
      return currentBoard;
    }
    case 'PLAYER_MOVE': {
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
    }
    default:
      return state
  }
}

export default board;