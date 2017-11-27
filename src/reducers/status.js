import { divideBoard, validateWin, validateDraw } from '../utils/boardValidation.js';

function validateBoard(currentState, board) {
  const dividedBoards = divideBoard(board);
  
  if (validateWin(dividedBoards.white)) {
    return 'WHITE_WON';
  }
  
  if (validateWin(dividedBoards.black)) {
    return 'BLACK_WON';
  }
  
  if (validateDraw(board)) {
    return 'TIE';
  }
  
  return 'IN_PLAY';
}

const status = (state = 'IN_PLAY', action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return 'IN_PLAY';
    case 'VALIDATE_BOARD':
      return validateBoard(state, action.board);
    default:
      return state
  }
}

export default status;