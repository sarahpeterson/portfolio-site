import { useState, useEffect } from 'react';

export const determineDate = (day, month, year, time) => {
  const thisIsNow = new Date();
  const userInputString = `${month}/${day}/${year}`;
  const user = new Date(userInputString);
  const userTime = user.getTime();
  const timer = thisIsNow.getTime()
  const subtract = timer - userTime
  const division = subtract / 60000;
  const round = Math.floor(division);
  return round;
}

export const useTimer = (day, month, year, time) => {
  const [minutes, setMinutesLeft] = useState(0);
  const today = new Date();
  const colon = time.indexOf(':');
  const first = time.slice(0, colon);
  const restAM = time.indexOf('a');
  const restPM = time.indexOf('p');
  const rest = restAM < 0 ? restPM : restAM;
  const second = time.slice(colon + 1, rest)
  const hour = 12;
  const check = first < 12 ? parseInt(first) + parseInt(hour) : first;
  const finalCheck = parseInt(check) - today.getHours();
  const checkMinutes = parseInt(second) - today.getMinutes();
  useEffect(() => {setMinutesLeft(checkMinutes)}, [checkMinutes]);
  const nowMonth = (today.getMonth() + 1);
  const nowYear = today.getFullYear();
  const nowDate = today.getDate();
  useEffect(() => {
    if (minutes === 0) {
      console.log('done');
    } else {
      setTimeout(() => {
        setMinutesLeft(minutes - 1);
      }, 60000);
    }
  });
  const breakdown = {
    date: Math.abs(day - nowDate),
    month: month - nowMonth,
    year: year - nowYear,
    hours: finalCheck,
    minutes: minutes
  }
  return breakdown;
};
