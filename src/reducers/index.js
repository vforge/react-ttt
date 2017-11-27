import { combineReducers } from 'redux';

import board from './board.js';
import currentIndex from './currentIndex.js';
import status from './status.js';

export default combineReducers({
  status,
  currentIndex,
  board,
})
