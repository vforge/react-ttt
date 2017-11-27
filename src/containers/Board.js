import { connect } from 'react-redux';

import { playerMove, validateBoard } from '../actions/index.js';
import Board from '../components/Board.js';

const emptyColors = [
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent',
];

const mapStateToProps = (state, ownProps) => {
  const colors = emptyColors.slice(0);
  
  state.board.forEach((item) => {
    colors[item.index] = item.player;
  });
  
  return {
    currentPlayer: state.currentPlayer,
    colors,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: (index, player) => {
      dispatch(playerMove(index, player));
      dispatch(validateBoard());
    },
  }
)

const BoardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardLink;