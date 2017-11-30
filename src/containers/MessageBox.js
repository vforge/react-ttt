import { connect } from 'react-redux';

import { getPlayerName, getPlayerColor } from '../utils/players.js';
import { resetGame } from '../actions/index.js';
import MessageBox from '../components/MessageBox.js';

const mapStateToProps = (state, ownProps) => {
  let message = '';
  let color = '';
  
  switch (state.status) {
    case 'TIE':
      message = 'It\'s a tie!';
      break;
    case '1_WON':
      message = `${getPlayerName(1)} WON!`;
      color = getPlayerColor(1);
      break;
    case '2_WON':
      message = `${getPlayerName(2)} WON!`;
      color = getPlayerColor(2);
      break;
    default:
      // nothing
  }
  
  return {
    message,
    color,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: () => {
      dispatch(resetGame());
    },
  }
)

const MessageBoxLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox);

export default MessageBoxLink;