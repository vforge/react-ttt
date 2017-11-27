import { connect } from 'react-redux';

import { resetGame } from '../actions/index.js';
import InfoPanel from '../components/InfoPanel.js';

const mapStateToProps = (state, ownProps) => {
  return {
    showResetButton: state.currentRound > 0,
    currentPlayer: state.currentPlayer,
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