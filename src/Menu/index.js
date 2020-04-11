import React from 'react';
import {
  Link
} from "react-router-dom";
import './style.css';

function Menu() {
  return (
    <div>
      <div className="menu-wrap">
        <Link className="menu-back" to="/">
          <img src="/arrow-left-solid.svg" className="back-arrow" alt="back arrow" />
          <p className="back-text">BACK</p>
        </Link>
        <div className="menu-container">
          <p className="menu-header">
            Potted
          </p>
          <div className="menu-item">
            <a
              className="menu-link"
              href="https://pottedpgh.com"
              alt="Potted's website"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Website
              </p>
            </a>
            <p className="menu-spacing">/</p>
            <a
              className="menu-link"
              href="/PottedSite.pdf"
              alt="Potted's designs"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Design
              </p>
            </a>
            <p className="menu-spacing">/</p>
            <a
              className="menu-link"
              href="https://github.com/sarahpeterson/pottedpgh"
              alt="Potted's GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                GitHub
              </p>
            </a>
          </div>
          <p className="menu-description">
            Sarah and her close friend created Potted as a side project
            to share their knowledge of house plants. Sarah designed the
            website and built it in React.
          </p>
        </div>
        <div className="menu-container">
          <p className="menu-header">
            Countdown
          </p>
          <div className="menu-item">
            <a
              className="menu-link"
              href="/countdown"
              alt="Countdown's website"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Website
              </p>
            </a>
            <p className="menu-spacing">/</p>
            <a
              className="menu-link"
              href="Countdown.pdf"
              alt="Countdown's designs"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Design
              </p>
            </a>
            <p className="menu-spacing">/</p>
            <a
              className="menu-link"
              href="https://github.com/sarahpeterson/countdown"
              alt="Countdown's GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                GitHub
              </p>
            </a>
          </div>
          <p className="menu-description">
            Sarah created a small app to demonstrate her knowledge of
            how to use hooks in React. The app will countdown the
            days, weeks, months, years, hours and minutes until
            the date that a user chooses.
          </p>
        </div>
        <div className="menu-container">
          <p className="menu-header">
            Resume
          </p>
          <div className="menu-item">
            <a
              className="menu-link"
              href="/SarahPetersonResume.pdf"
              alt="Sarah's Resume"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Download
              </p>
            </a>
            <p className="menu-spacing">/</p>
            <a
              className="menu-link"
              href="https://github.com/sarahpeterson"
              alt="Sarah's GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                GitHub
              </p>
            </a>
          </div>
          <p className="menu-description">
            To learn more about Sarah, please see this pdf of her resume.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
