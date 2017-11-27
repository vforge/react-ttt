import { connect } from 'react-redux';

import { resetGame, aiMove, validateBoard } from '../actions/index.js';
import InfoPanel from '../components/InfoPanel.js';

const mapStateToProps = (state, ownProps) => {
  return {
    showResetButton: state.currentRound > 0,
    currentPlayer: state.currentPlayer,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onResetClick: () => {
      dispatch(resetGame())
    },
    onAiClick: (player) => {
      dispatch(aiMove(player))
      dispatch(validateBoard())
    },
  }
)

const InfoPanelLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPanel);

export default InfoPanelLink;