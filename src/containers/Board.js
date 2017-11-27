import { connect } from 'react-redux';

import { playerMove, validateBoard } from '../actions/index.js';
import Board from '../components/Board.js';

const emptyBoard = [
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent',
];

const mapStateToProps = (state, ownProps) => {
  let board = emptyBoard.slice(0);
  let counter = 0;
  
  state.board.forEach((item) => {
    board[item] = (counter++ % 2) ? 'black' : 'white';
  });

  return {
    board,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: (index) => {
      dispatch(playerMove(index));
      dispatch(validateBoard());
    },
  }
)

const BoardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardLink;