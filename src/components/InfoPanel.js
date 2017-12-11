import React from 'react';
import PropTypes from 'prop-types';

import ClickableButton from './ClickableButton.js';

import './InfoPanel.css';

const InfoPanel = ({ currentPlayer, showResetButton, onResetClick, onAiClick }) => {
  return <div className='InfoPanel'>
      <ClickableButton content='AI' onClick={() => onAiClick(currentPlayer)} />
      <ClickableButton content='RESET' isHidden={!showResetButton} onClick={onResetClick} />
    </div>;
}

InfoPanel.propTypes = {
  onResetClick: PropTypes.func.isRequired,
  onAiClick: PropTypes.func.isRequired,
  showResetButton: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

export default InfoPanel;