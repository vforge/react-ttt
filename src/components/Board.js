import React from 'react';
import PropTypes from 'prop-types';

import BoardItem from './BoardItem.js';

const Board = ({ board, onClick }) => {
  const items = [];
  
  for (let index = 0; index < 9; index++) {
    items.push(
      <BoardItem key={index} color={board[index]} onClick={() => onClick(index)} />
    );
  }
  
  return <div className='Board'>{items}</div>;
}

Board.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.string
    // PropTypes.shape({
    //   color: PropTypes.string.isRequired,
    // }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;