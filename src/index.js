import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {getRandomPlayer} from './utils/players.js';

import './index.css';

const store = createStore(
  reducers,
  {
    currentRound: 0,
    currentPlayer: getRandomPlayer(),
    board: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const basename = window.location.hostname === 'vforge.github.io' ? '/react-ttt' : '';

render(
  <BrowserRouter basename={basename}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
