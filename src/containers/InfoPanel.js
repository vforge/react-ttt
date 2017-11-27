import { connect } from 'react-redux';

import { resetGame } from '../actions/index.js';
import InfoPanel from '../components/InfoPanel.js';

const mapStateToProps = (state, ownProps) => {
  return {
    showResetButton: state.currentIndex > 0,
    currentPlayer: (state.currentIndex % 2) ? 'BLACK' : 'WHITE',
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: () => {
      dispatch(resetGame())
    },
  }
)

const InfoPanelLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPanel);

export default InfoPanelLink;