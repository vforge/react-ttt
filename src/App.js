import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About.js';
import Game from './components/Game.js';
import Start from './components/Start.js';

import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route exact path='/game' component={Game}/>
      <Route exect path='/about' component={About}/>
    </Switch>
  </div>
);

export default App;
