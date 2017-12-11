import React from 'react';
import PropTypes from 'prop-types';

import { getPlayerColor, getPlayerName } from '../utils/players.js';

import ClickableButton from './ClickableButton.js';

import './InfoPanel.css';

const InfoPanel = ({ currentPlayer, showResetButton, onResetClick, onAiClick }) => {
  const resetButton = showResetButton ? 
    <ClickableButton content='RESET' onClick={onResetClick} /> :
    '';
  
  return <div className='InfoPanel'>
      <ClickableButton content='AI' onClick={() => onAiClick(currentPlayer)} />
      {resetButton}
    </div>;
}

InfoPanel.propTypes = {
  onResetClick: PropTypes.func.isRequired,
  onAiClick: PropTypes.func.isRequired,
  showResetButton: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

export default InfoPanel;