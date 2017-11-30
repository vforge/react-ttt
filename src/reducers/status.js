import { divideBoard, validateWin, validateDraw } from '../utils/boardValidation.js';

export function validateBoard(board) {
  const dividedBoards = divideBoard(board);
  console.log(dividedBoards);
  
  if (validateWin(dividedBoards[1])) {
    return '1_WON';
  }
  
  if (validateWin(dividedBoards[2])) {
    return '2_WON';
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
    default:
      return state
  }
}

export default status;