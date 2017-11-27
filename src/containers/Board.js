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
  
  console.log(state);

  return {
    currentPlayer: state.currentPlayer,
    colors,
    board: state.board,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: (index, player, newBoard) => {
      dispatch(playerMove(index, player));
      dispatch(validateBoard(newBoard));
    },
  }
)

const BoardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardLink;