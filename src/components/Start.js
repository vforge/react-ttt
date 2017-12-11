import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button.js';

import './Start.css';

const noStyles = {
  color: 'inherit',
  textDecoration: 'none',
};

const Start = () => (
  <div className="Start">
    <img className="StartImage" src="/favicon-128.png" alt="" />
    <h1 className="StartTitle">Tic-Tac-Toe</h1>
    <div className="StartMenu">
      <Link to="/game" style={noStyles}>
        <Button content="New game" />
      </Link>
      <Link to="/about" style={noStyles}>
        <Button content="About" />
      </Link>
    </div>
  </div>
)

export default Start;