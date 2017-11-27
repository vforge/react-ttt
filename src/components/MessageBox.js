import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ message, onClick }) => {
  if (!message.length) {
    return '';
  }
  
  return <div className='MessageBox' onClick={onClick}>
    <div>{message}</div>
    <span>Click this message box to reset</span>
  </div>;
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageBox;