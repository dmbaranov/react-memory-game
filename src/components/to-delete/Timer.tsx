import React, { useState, useEffect, useRef } from 'react';

// export default function Timer() {
const Timer: React.FC = () => {
  const intervalRef: any = useRef(null);
  const [time, updateTime] = useState<number>(0);
  const [timerWorks, toggleTimerState] = useState<boolean>(false);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function toggleTimer() {
    if (timerWorks) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(
        () => updateTime((time: number) => (time += 1)),
        1000
      );
    }

    toggleTimerState(!timerWorks);
  }

  function clearTimer() {
    updateTime(0);
    toggleTimerState(false);
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <div data-testid="timerText">
        Time: {time}, {timerWorks ? 'True' : 'False'}
      </div>
      <button data-testid="toggleButton" onClick={toggleTimer}>
        Toggle
      </button>
      <button data-testid="clearButton" onClick={clearTimer}>
        Clear
      </button>
    </>
  );
};

export default Timer;
