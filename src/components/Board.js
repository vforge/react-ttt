import React from 'react';
import PropTypes from 'prop-types';

import BoardItem from './BoardItem.js';
import './Board.css';

const Board = ({ currentPlayer, boardState, onClick }) => {
  const items = [];
  
  for (let index = 0; index < 9; index++) {
    items.push(
      <BoardItem
        key={index}
        index={index}
        state={boardState[index]}
        onClick={() => onClick(index, currentPlayer)}
      />
    );
  }
  
  return <div className='Board'>{items}</div>;
}

Board.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  boardState: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;