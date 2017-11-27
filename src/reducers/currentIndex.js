const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'PLAYER_MOVE':
      return state + 1;
    case 'RESET_GAME':
      return 0;
    default:
      return state
  }
}

export default currentIndex;