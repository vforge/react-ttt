import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ content }) => (
  <div className='Button'>{content}</div>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;