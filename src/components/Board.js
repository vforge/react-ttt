import React from 'react';
import PropTypes from 'prop-types';

import BoardItem from './BoardItem.js';

const Board = ({ colors, board, onClick }) => {
  const items = [];
  
  for (let index = 0; index < 9; index++) {
    items.push(
      <BoardItem
        key={index}
        index={index}
        color={colors[index]}
        onClick={() => onClick(index, board)}
      />
    );
  }
  
  return <div className='Board'>{items}</div>;
}

Board.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;