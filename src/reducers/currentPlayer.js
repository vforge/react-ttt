import {getNextPlayer, getRandomPlayer} from '../utils/players.js';

const currentPlayer = (state = getRandomPlayer(), action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return getRandomPlayer();
    case 'AI_MOVE':
    case 'PLAYER_MOVE':
      return getNextPlayer(state);
    default:
      return state
  }
}

export default currentPlayer;