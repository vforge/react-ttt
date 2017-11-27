import { connect } from 'react-redux';

import { playerMove, validateBoard } from '../actions/index.js';
import Board from '../components/Board.js';

const emptyColors = [
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent', 
  'transparent', 'transparent', 'transparent',
];

const mapStateToProps = (state, ownProps) => {
  let colors = emptyColors.slice(0);
  let counter = 0;
  
  state.board.forEach((item) => {
    colors[item] = (counter++ % 2) ? 'black' : 'white';
  });

  return {
    colors,
    board: state.board,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onClick: (index, board) => {
      const newBoard = board.slice(0);
      newBoard.push(index);
      
      dispatch(playerMove(index));
      dispatch(validateBoard(newBoard));
    },
  }
)

const BoardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardLink;