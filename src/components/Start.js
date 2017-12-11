import React from 'react';
import { Link } from 'react-router-dom';

import destyleLink from '../utils/destyleLink.js';
import Button from './Button.js';

import './Start.css';

const Start = () => (
  <div className="Start">
    <img className="StartImage" src="/favicon-128.png" alt="" />
    <h1 className="StartTitle">Tic-Tac-Toe</h1>
    <div className="StartMenu">
      <Link to="/game" style={destyleLink}>
        <Button content="New game" />
      </Link>
      <Link to="/about" style={destyleLink}>
        <Button content="About" />
      </Link>
    </div>
  </div>
)

export default Start;