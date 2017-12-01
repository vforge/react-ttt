import React from 'react';
import PropTypes from 'prop-types';

import { getPlayerColor, getPlayerName } from '../utils/players.js';

import './InfoPanel.css';

const InfoPanel = ({ currentPlayer, showResetButton, onResetClick, onAiClick }) => {
  const resetButton = showResetButton ? 
    <button onClick={onResetClick}>{'RESET'}</button> :
    '';
    
  const style = {
    backgroundColor: getPlayerColor(currentPlayer),
  };
  
  return <div className='InfoPanel'>
      <div className='player' style={style}>
        <div>&#x21E8;</div>
        {getPlayerName(currentPlayer)}
        <div>&#x21E6;</div>
      </div>
      <button onClick={() => onAiClick(currentPlayer)}>{'AI'}</button>
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