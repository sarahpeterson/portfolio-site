import React, { useState } from 'react';
import './style.css';
import { useTimer } from './TimerHook.js';
import ShowTimer from './ShowTimer.js';

const handleChange = (e) => {
  let inputValue = e.target.value;
  return inputValue;
}

const setTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const setHours = hours <= 12 ? hours : hours - 12;
  const amPM = hours <= 12 ? 'am' : 'pm';
  const setMins = minutes < 10 ? `0${minutes}` : minutes;
  const finalTime = `${setHours}:${setMins}${amPM}`;
  return finalTime;
}

function Timer() {
  const today = new Date();
  const correctMonth = today.getMonth() + 1;
  const [day, updateDay] = useState(today.getDate());
  const [month, updateMonth] = useState(correctMonth);
  const [year, updateYear] = useState(today.getFullYear());
  const [time, updateTime] = useState(setTime());
  const [show, showTimer] = useState(false);
  const newTime = useTimer(day, month, year, time);
  const newDate = `${year}-${month}-${day}`;
  const onButtonClick = () => {
    if (new Date(newDate) < today && time < setTime()) {
      alert("Please try a date in the future instead.")
    } else {
      showTimer(true);
    }
  };
  if (show) return <ShowTimer newTime={newTime} />;
  return (
    <div className="timer">
      <p className="timer-instructions">
        Set your countdown clock by entering a date below:
      </p>
      <div className="timer-container">
        <div className="month">
          <input
            className="input"
            value={month}
            type="number"
            min="1"
            max="12"
            onChange={(e) => updateMonth(handleChange(e))}
          />
          <p>Month</p>
        </div>
        <div className="day">
          <input
            className="input"
            value={day}
            type="number"
            min="1"
            max="31"
            onChange={(e) => updateDay(handleChange(e))}
          />
          <p>Day</p>
        </div>
        <div className="year">
          <input
            className="input year"
            value={year}
            type="number"
            min="2020"
            onChange={(e) => updateYear(handleChange(e))}
          />
          <p>Year</p>
        </div>
        <div className="time">
          <input
            className="input time"
            value={time}
            onChange={(e) => updateTime(handleChange(e))}
          />
          <p>Time</p>
        </div>
      </div>
      <button
        title="Submit"
        className="submit"
        onClick={() => onButtonClick()}
      >
        <p>Submit</p>
      </button>
    </div>
  );
}

export default Timer;
