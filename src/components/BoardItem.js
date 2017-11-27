import React from 'react';
import PropTypes from 'prop-types';

const BoardItem = ({ index, onClick, color }) => {
  const className = `BoardItem is-${color}`;
  
  return <div onClick={onClick} className={className}>{index}</div>;
}

BoardItem.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default BoardItem;