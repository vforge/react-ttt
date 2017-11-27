import { combineReducers } from 'redux';

import board from './board.js';
import currentPlayer from './currentPlayer.js';
import currentRound from './currentRound.js';
import status from './status.js';
import { validateBoard } from './status.js';

const combinedReducer = combineReducers({
  status,
  currentRound,
  currentPlayer,
  board,
})

function crossSliceReducer(state, action) {
  switch(action.type) {
    // https://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
    case 'VALIDATE_BOARD' : {
      return {
        status: validateBoard(state.board),
        currentRound: state.currentRound,
        currentPlayer: state.currentPlayer,
        board: state.board,
      };
    }
    default:
      return state;
  }
}

export default function rootReducer(state, action) {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);

  return finalState;
}