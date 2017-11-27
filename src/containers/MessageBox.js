import { connect } from 'react-redux';

import { resetGame } from '../actions/index.js';
import MessageBox from '../components/MessageBox.js';

const mapStateToProps = (state, ownProps) => {
  let message = '';
  
  switch (state.status) {
    case 'TIE':
      message = 'It\'s a tie!';
      break;
    case 'WHITE_WON':
      message = 'WHITE WON!';
      break;
    case 'BLACK_WON':
      message = 'BLACK WON!';
      break;
    default:
      // nothing
  }
  
  return {
    message,
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