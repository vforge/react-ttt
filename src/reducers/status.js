/**
 * Available statues:
 * IN_PLAY
 * WHITE_WON
 * BLACK_WON
 * TIE
 */
function validateBoard(currentState, board) {
  // @FIXME
  return 'IN_PLAY';
}

const status = (state = 'IN_PLAY', action) => {
  switch (action.type) {
    case 'VALIDATE_BOARD':
      return validateBoard(state, action.board);
    default:
      return state
  }
}

export default status;