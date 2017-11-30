const PLAYERS = {
  1: {
    name: 'ORANGE',
    color: '#e69f00',
  },
  2: {
    name: 'BLUE',
    color: '#56b4e9',
  },
};

export function getPlayerName(player) {
  return PLAYERS[player].name;
}

export function getPlayerColor(player) {
  return PLAYERS[player].color;
}

export function getNextPlayer(player) {
  return player === 2 ? 1 : 2;
}

export function getRandomPlayer() {
  // random between 1 and 2
  return 1 + Math.round(Math.random());
}