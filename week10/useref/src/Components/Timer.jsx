import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const timer = useRef(0);
  // const timeRef = useRef;
  // const StartTime = useRef(0);

  function startTimer(){
    timer.current = setInterval(() => {
      setTime(t => t+1);
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timer.current);
  }

  function resetTimer(){
    clearInterval(timer.current);
    setTime(0);
  }

  return (
    <div>
      <p>{Math.floor(time/3600)} : {Math.floor((time%3600)/60)} : {Math.floor(time%60)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>ReSet</button>
    </div>
  )
}

export default Timer
