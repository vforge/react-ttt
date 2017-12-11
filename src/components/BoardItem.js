import React from 'react';
import PropTypes from 'prop-types';

import { getPlayerColor, getPlayerName } from '../utils/players.js';

import './BoardItem.css';

const getItemText = (state, defaultValue) => (
  state !== 0 ? getPlayerName(state) : defaultValue
);

const BoardItem = ({ index, onClick, state }) => {
  let className = 'BoardItem';
  const style = {};
  
  if (state === 0) {
    className += ' is-clickable';
  } else {
    const color= getPlayerColor(state);
    style.color = color;
    style.borderColor = color;
  }
  
  return <div onClick={onClick} style={style} className={className}>
    {getItemText(state, index)}
  </div>;
}

BoardItem.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default BoardItem;