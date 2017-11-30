export function validateIndices(board, indices) {
  // @FIXME
  const intersectArray = indices
    .filter((n) => board.includes(n))
    .filter((e, i, c) => c.indexOf(e) === i);
    
  return intersectArray.length === indices.length;
}

export function validateDraw(board) {
  return board.length === 9;
}

export function validateWin(board) {
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

export function divideBoard(board) {
  const dividedBoards = {
    1: [],
    2: [],
  };
  
  board.forEach((item) => {
    dividedBoards[item.player].push(item.index);
  })
  
  return dividedBoards;
}