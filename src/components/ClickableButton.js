import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const ClickableButton = ({ content, isHidden, onClick }) => {
  const style = {};
  
  if (isHidden) {
    style.visibility = 'hidden';
  }
  
  return <div className='Button' onClick={onClick} style={style}>{content}</div>
};

ClickableButton.propTypes = {
  content: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ClickableButton;