import React, { useState } from 'react';
import plus from './plus.png';
import './style.css';
import Timer from './Timer.js';

function Countdown() {
  const [timer, showTimer] = useState(false);
  if (timer) {
    return <Timer />;
  }
  return (
    <div className="countdown">
      <div title="+" className="button">
        <div onClick={() => showTimer(true)}>
          <img src={plus} alt="add-new" height="100px"/>
        </div>
      </div>
      <div className="count">
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="count">
        <p className="down margin-fifty">
          COUNT
        </p>
      </div>
      <div className="margin-hundred count">
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="margin-one-fifty count">
        <p className="down">
          COUNT
        </p>
      </div>
      <div className="margin-two-hundred count">
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="margin-two-fifty count">
        <p className="down">
          COUNT
        </p>
      </div>
      <div className="margin-three-hundered count">
        <p className="down">
          DOWN
        </p>
      </div>
    </div>
  );
}

export default Countdown;
