import { combineReducers } from 'redux';

import board from './board.js';
import currentPlayer from './currentPlayer.js';
import currentRound from './currentRound.js';
import status from './status.js';

export default combineReducers({
  status,
  currentRound,
  currentPlayer,
  board,
})
