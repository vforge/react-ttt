import React from 'react';
import PropTypes from 'prop-types';

const BoardItem = ({ onClick, color }) => {
  const className = `BoardItem is-${color}`;
  
  return <div
      onClick={onClick}
      className={className}
    >
    </div>;
}

BoardItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default BoardItem;