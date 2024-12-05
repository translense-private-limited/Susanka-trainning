import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef(null);
  const dialog = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);

  function handleStart() {
    if (!timerIsActive) {
      setTimerIsActive(true);
      timer.current = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) =>
          Math.max(prevTimeRemaining - 10, 0)
        );
      }, 10);
    }
  }

  function handleStop() {
    if (timerIsActive) {
      clearInterval(timer.current);
      setTimerIsActive(false);
      dialog.current.open();
    }
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    setTimerIsActive(false);
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          Target Time: {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p className="time-remaining">
          Time Remaining: {(timeRemaining / 1000).toFixed(2)} seconds
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Time is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
