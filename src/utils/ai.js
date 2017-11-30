export function getDumbMove(currentBoardState) {
  let validIndices = '012345678'.split('');
  
  // filter alstready used indices
  if (currentBoardState.length) {
    const usedIndices = currentBoardState.map(item => item.index);
    
    validIndices = validIndices.filter(
      item => usedIndices.indexOf(parseInt(item, 10)) === -1
    );
  }
    
  // return random valid index
  return parseInt(validIndices[Math.floor(Math.random() * validIndices.length)], 10);
}