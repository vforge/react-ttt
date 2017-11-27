
function validateIndices(board, indices) {
  // @FIXME
  const intersectArray = indices
    .filter((n) => board.includes(n))
    .filter((e, i, c) => c.indexOf(e) === i);
    
  return intersectArray.length === indices.length;
}

function validateDraw(board) {
  return board.length === 9;
}

function validateWin(board) {
  // @FIXME
  return false ||
    // horizontal
    validateIndices(board, [0, 1, 2]) ||
    validateIndices(board, [3, 4, 5]) ||
    validateIndices(board, [6, 7, 8]) ||
    // vertical
    validateIndices(board, [0, 3, 6]) ||
    validateIndices(board, [1, 4, 7]) ||
    validateIndices(board, [2, 5, 8]) ||
    // diagonal
    validateIndices(board, [0, 4, 8]) ||
    validateIndices(board, [2, 4, 6]);
}

function divideBoard(board) {
  const dividedBoards ={
    black: [],
    white: [],
  };
  
  board.forEach((item) => {
    dividedBoards[item.player].push(item.index);
  })
  
  return dividedBoards;
}

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