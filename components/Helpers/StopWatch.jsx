import { useState, useEffect } from "react";


function StopWatch({ start, timeOut, classNames, timeNow }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
	let interval = null;

    (start) ? handleStart() : handleReset();

    (timeOut) ? handlePauseResume(timeOut) : null;


	if (isActive && isPaused === false) {
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
	} else {
    clearInterval(interval);
	}


	return () => {
	clearInterval(interval);
	};
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isActive, isPaused, start, timeOut]);


  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };


  const handlePauseResume = (value) => {
    timeNow(`${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`)
    setIsPaused(value);
  };


  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };


  return (
    <span className={(isActive) ? classNames.join(' ') : classNames[0]} >
      {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
    </span>
  );
}


export default StopWatch;