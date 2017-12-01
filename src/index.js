import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tttApp from './reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Footer from './components/Footer.js';

import {getRandomPlayer} from './utils/players.js';

import './index.css';

const store = createStore(
  tttApp,
  {
    currentRound: 0,
    currentPlayer: getRandomPlayer(),
    board: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <div class="index">
    <Provider store={store}>
      <App />
    </Provider>
    <Footer />
  </div>,
  document.getElementById('root'));

registerServiceWorker();
