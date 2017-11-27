const currentRound = (state = 0, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return 0;
    case 'AI_MOVE':
    case 'PLAYER_MOVE':
      return state + 1;
    default:
      return state
  }
}

export default currentRound;