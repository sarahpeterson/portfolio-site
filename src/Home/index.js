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
        {
          // <div className="menu">
          //   <Link className="menu-text" to="/menu">MENU</Link>
          // </div>
        }
      </div>
      <div>
        <div className="menu-wrap">
          {
            // <Link className="menu-back" to="/">
            //   <img src="/arrow-left-solid.svg" className="back-arrow" alt="back arrow" />
            //   <p className="back-text">BACK</p>
            // </Link>
          }
          <div className="menu-container">
            <p className="menu-header">
              Sarah
            </p>
            <div className="menu-item">
              <a
                className="menu-link"
                href="mailto:sarahmasonpeterson@gmail.com"
                alt="Sarah's Email"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>
                  Email
                </p>
              </a>
              <p className="menu-spacing">/</p>
              <a
                className="menu-link"
                href="https://www.linkedin.com/in/sarah-peterson-4444b946/"
                alt="Sarah's LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>
                  LinkedIn
                </p>
              </a>
              <p className="menu-spacing">/</p>
              <a
                className="menu-link"
                href="/SarahPetersonResume.pdf"
                alt="Sarah's Resume"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>
                  Resume
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
              Sarah is a Front End Developer based in Pittsburgh, PA. She is proficient in
              React, React Native, HTML, CSS, JavaScript, Sketch and UI Design.
              You can reach Sarah and learn more about her at the links above.
            </p>
          </div>
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
              <Link className="menu-link" to="/countdown">
                <p>
                  Website
                </p>
              </Link>
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
              Accomplish Reading
            </p>
            <div className="menu-item">
              <a
                className="menu-link"
                href="https://apps.apple.com/us/app/accomplish-reading/id977303261?ign-mpt=uo%3D4"
                alt="Link to app in Apple App Store"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>
                  Apple App Store
                </p>
              </a>
            </div>
            <p className="menu-description">
              Sarah was the lead developer and tech lead on the development of this app
              for a client at her current company. It was built using React Native, Redux and Persist. The customer
              did not want a backend or database so the app saves all data locally with Persist.
              The app is available for download for $1.99.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
