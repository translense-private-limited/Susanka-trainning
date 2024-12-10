import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timer, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    console.log("setting time");
    const timeout = setTimeout(onTimeOut, timer);
    return () => clearTimeout(timeout);
  }, [timer, onTimeOut]);
  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <progress id="question-time" max={timer} value={remainingTime} />;
};

export default QuestionTimer;
