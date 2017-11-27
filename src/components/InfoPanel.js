import React from 'react';
import PropTypes from 'prop-types';

const InfoPanel = ({ currentPlayer, showResetButton, onClick }) => {
  const resetButton = showResetButton ? 
    <button onClick={onClick}>{'RESET'}</button> :
    '';
  
  return <div className='InfoPanel'>
      <div>
        {'Current Player: '}
        {currentPlayer}
      </div>
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