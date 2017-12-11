import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const ClickableButton = ({ content, onClick }) => (
  <div className='Button' onClick={onClick}>{content}</div>
);

ClickableButton.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickableButton;