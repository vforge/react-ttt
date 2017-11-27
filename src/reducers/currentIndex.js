const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return 0;
    case 'PLAYER_MOVE':
      return state + 1;
    default:
      return state
  }
}

export default currentIndex;