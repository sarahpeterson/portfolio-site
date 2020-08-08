import React from 'react';
import './style.css';
import {
  Link
} from "react-router-dom";

// fix countdown on smaller screen
// eliminate render-blocking resources - resources are blocking the first paint of yoru page
// the start url did respond but not via a service worker
// page is blocked from indexing
// make the home sections a reusable component

function Home() {
  return (
    <main className="App">
      <div className="border">
        <p className="home-text bottom">Sarah Peterson,</p>
        <p className="home-text top">Developer</p>
      </div>
      <div>
        <div className="menu-wrap">
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
              Text911
            </p>
            <div className="menu-item">
              <a
                className="menu-link"
                href="https://confident-bose-d7d254.netlify.app/"
                alt="Text911 website"
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
                href="https://github.com/sarahpeterson/text-911-backup"
                alt="Text911 GitHub repository"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>
                  GitHub
                </p>
              </a>

            </div>
            <p className="menu-description">
              With a friend, Sarah is working on a Progressive Web App that will
              give everyone the ability to contact emergency services. In 70% of the
              United States, you cannot contact 911 through text message. That means, those
              who are deaf, hard of hearing or who don't speak English cannot easily reach
              emergency services. A work in progress, the app has an easy to use UI that
              will collect the necessary information and send it to the correct dispatch
              center so everyone can get the help they need. The PWA was built in React
              and uses the MapBox API to find the user's location and the Twilio API to
              send text messages.
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
              Potted is a shared passion side project that Sarah is working on
              with a friend as a way to share their knowledge of house plants.
              Sarah designed the website and built it in React.
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
              This small app demonstrates Sarah's knowledge of
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
    </main>
  );
}

export default Home;
