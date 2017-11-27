import nextPlayer from '../utils/nextPlayer.js';

let currentPlayerColor = 'white';

const currentPlayer = (state = 'white', action) => {
  switch (action.type) {
    case 'RESET_GAME':
      currentPlayerColor = 'white'
      
      return currentPlayerColor;
    case 'AI_MOVE':
    case 'PLAYER_MOVE':
      currentPlayerColor = nextPlayer(currentPlayerColor);
      
      return currentPlayerColor;
    default:
      return state
  }
}

export default currentPlayer;