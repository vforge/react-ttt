import { connect } from 'react-redux';

import { playerMove, validateBoard } from '../actions/index.js';
import Board from '../components/Board.js';

const emptyBoardState = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

const mapStateToProps = (state, ownProps) => {
  const boardState = emptyBoardState.slice(0);
  
  state.board.forEach((item) => {
    boardState[item.index] = item.player;
  });
  
  return {
    currentPlayer: state.currentPlayer,
    boardState,
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