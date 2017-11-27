import React from 'react';
import PropTypes from 'prop-types';

const InfoPanel = ({ currentPlayer, showResetButton, onClick }) => {
  const resetButton = showResetButton ? 
    <button onClick={onClick}>{'RESET'}</button> :
    '';
    
  const style = {
    backgroundColor: currentPlayer
  };
  
  return <div className='InfoPanel'>
      <div>
        {'Next move:'}
      </div>
      <div className='player' style={style}></div>
      <div>
        {resetButton}
      </div>
    </div>;
}

InfoPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  showResetButton: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default InfoPanel;