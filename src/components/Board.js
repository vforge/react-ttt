import React from 'react';
import PropTypes from 'prop-types';

import BoardItem from './BoardItem.js';

const Board = ({ currentPlayer, board, colors, onClick }) => {
  const items = [];
  
  for (let index = 0; index < 9; index++) {
    const newBoard = board.slice(0);
    newBoard.push({
      index,
      player: currentPlayer,
    });
    
    items.push(
      <BoardItem
        key={index}
        index={index}
        color={colors[index]}
        onClick={() => onClick(index, currentPlayer, newBoard)}
      />
    );
  }
  
  return <div className='Board'>{items}</div>;
}

Board.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;