import React from 'react';
import { Link } from 'react-router-dom';

import destyleLink from '../utils/destyleLink.js';
import Button from './Button.js';

import './About.css';

const About = () => (
  <div className="About">
    <h1>React Tic-Tac-Toe</h1>
    <div className="AboutDescription">Kata done as a part of learning React/Redux/PWA and other technologies.</div>
    <div className="AboutCopyright">&copy; Bartosz V. Bentkowski</div>
    <div className="AboutLink">Website: <a href="https://vforge.github.com/react-ttt">https://vforge.github.com/react-ttt</a></div> 
    <div className="AboutLink">Source: <a href="https://github.com/vforge/react-ttt">https://github.com/vforge/react-ttt</a></div>
    <Link className="AboutOk" to="/" style={destyleLink}>
      <Button content="Cool!" />
    </Link>
  </div>
)

export default About;