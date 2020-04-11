import React from 'react';
import './style.css';

function ShowTimer(props) {
  const { newTime } = props;
  const { date, month, year, minutes, hours } = newTime;
  const newDay = date === 1 ? `${date} day,` : `${date} days,`;
  const newMonth = month === 1 ? `${month} month,` : `${month} months,`;
  const newYear = year === 1 ? `${year} year,` : `${year} years,`;
  const newHours = hours === 1 ? `${hours} hour` : `${hours} hours,`;
  const newMinutes = minutes === 1 ? `and ${minutes} minute left` : `and ${minutes} minutes left`;
  return (
    <div className="timer">
      <p>There are...</p>
      <p>{newDay}</p>
      <p>{newMonth}</p>
      <p>{newYear}</p>
      <p>{newHours}</p>
      <p>{newMinutes}</p>
    </div>
  )
}

export default ShowTimer;
