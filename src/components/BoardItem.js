import React from 'react';
import PropTypes from 'prop-types';

import { getPlayerColor } from '../utils/players.js';

import './BoardItem.css';

const BoardItem = ({ index, onClick, state }) => {
  let className = 'BoardItem';
  const style = {};
  
  if (state === 0) {
    className += ' is-clickable';
  } else {
    style.color = getPlayerColor(state);
  }
  
  return <div onClick={onClick} style={style} className={className}>{index}</div>;
}

BoardItem.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default BoardItem;