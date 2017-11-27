export default function nextPlayer(playerColor) {
  if (playerColor === 'white') {
    playerColor = 'black';
  } else {
    playerColor = 'white';
  }
  
  return playerColor;
}