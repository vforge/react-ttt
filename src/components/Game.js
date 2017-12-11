import React from 'react';

import Board from '../containers/Board.js';
import InfoPanel from '../containers/InfoPanel.js';
import MessageBox from '../containers/MessageBox.js';

import './Game.css';

const Game = () => (
  <div className="Game">
    <MessageBox />
    <Board />
    <InfoPanel />
  </div>
);

export default Game;
