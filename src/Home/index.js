import React from 'react';
import './style.css';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="border">
        <p className="home-text bottom">Sarah Peterson,</p>
        <p className="home-text top">Developer</p>
        <div className="menu">
          <Link className="menu-text" to="/menu">MENU</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
