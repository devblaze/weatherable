import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="top-bar">
      <img src={logo} alt="Weatherable logo" className="logo" />
    </div>
    <div className="header-content">
      <h1>The weather in every corner of the world.</h1>
      <p className="subheader">
        Pick a place on the map and find out the weather. Plan better your trips or daily tasks.
        With Weatherable you can now feel safe, ready and prepared.
      </p>
    </div>
  </header>
);

export default Header;
