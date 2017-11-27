import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tttApp from './reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  tttApp,
  {
    currentRound: 0,
    currentPlayer: 'white',
    board: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
