import React, {Component} from 'react';

import Board from './containers/Board.js';
import InfoPanel from './containers/InfoPanel.js';
import MessageBox from './containers/MessageBox.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageBox />
        <Board />
        <InfoPanel />
      </div>
    );
  }
}

export default App;
