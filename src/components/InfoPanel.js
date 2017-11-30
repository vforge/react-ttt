import React from 'react';
import PropTypes from 'prop-types';

import { getPlayerColor } from '../utils/players.js';

import './InfoPanel.css';

const InfoPanel = ({ currentPlayer, showResetButton, onResetClick, onAiClick }) => {
  const resetButton = showResetButton ? 
    <button onClick={onResetClick}>{'RESET'}</button> :
    '';
    
  const style = {
    backgroundColor: getPlayerColor(currentPlayer),
  };
  
  return <div className='InfoPanel'>
      <div>{'Next move:'}</div>
      <div className='player' style={style}></div>
      <div><button onClick={() => onAiClick(currentPlayer)}>{'AI'}</button></div>
      <div>{resetButton}</div>
    </div>;
}

InfoPanel.propTypes = {
  onResetClick: PropTypes.func.isRequired,
  onAiClick: PropTypes.func.isRequired,
  showResetButton: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

export default InfoPanel;