import React from 'react';
import PropTypes from 'prop-types';

import './MessageBox.css';

const MessageBox = ({ message, color, onClick }) => {
  if (!message.length) {
    return '';
  }
  
  let style = {};
  
  if (color.length) {
    style.color = color;
  }
  
  return <div className='MessageBox' onClick={onClick}>
    <div style={style}>{message}</div>
    <span>Click this message box to reset</span>
  </div>;
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default MessageBox;