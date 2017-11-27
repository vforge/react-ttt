import { connect } from 'react-redux';

import { resetGame } from '../actions/index.js';
import MessageBox from '../components/MessageBox.js';

const mapStateToProps = (state, ownProps) => {
  let message = '';
  
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