import React, { useEffect } from "react";
import "./CountdownTimer.css";
import { useState } from "react";

export const CountdownTimer = () => {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "hour") {
      setHour(value);
    } else if (id === "minute") {
      setMinute(value);
    } else if (id === "second") {
      setSecond(value);
    }
  };

  const startTimer = () => {
    console.log("Start timer called");
    console.log(hour, minute, second);

    if (second > 0) {
      setSecond((sec) => sec - 1);
    } else if (second === 0 && minute > 0) {
      setMinute((min) => min - 1);
      setSecond(59);
    } else if (minute === 0 && hour > 0) {
      {
        setHour((hr) => hr - 1);
        setMinute(59);
        setSecond(59);
      }
    }
  };

  const handleReset = () => {
    clearInterval(timer);
    setSecond(0);
    setMinute(0);
    setHour(0);
    setIsTimerStarted(false);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    }
    clearInterval(timer);
  }, [isPaused]);
  useEffect(() => {
    let tim;
    if (isTimerStarted) {
      tim = setInterval(() => {
        startTimer();
      }, 1000);
      setTimer(tim);
    }

    return () => clearInterval(tim);
  }, [isTimerStarted, hour, second, minute]);
  return (
    <>
      {!isTimerStarted && (
        <div className="countdown-input">
          <div className="countdown-container">
            <input
              min="0"
              max="12"
              type="number"
              id="hour"
              onChange={handleInput}
            />
            <span>:</span>
            <input
              min="0"
              max="60"
              type="number"
              id="minute"
              onChange={handleInput}
            />
            <span>:</span>
            <input
              min="0"
              max="60"
              type="number"
              id="second"
              onChange={handleInput}
            />
          </div>
          <div className="btn-container">
            <button onClick={() => setIsTimerStarted(true)}>Start</button>
          </div>
        </div>
      )}

      {isTimerStarted && (
        <div>
          <div className="countdown-output">
            <div>{hour}</div>
            <span>:</span>
            <div>{minute}</div>
            <span>:</span>
            <div>{second}</div>
          </div>

          <div className="countdown-output-btn">
            <button onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={() => handleReset()}>Reset</button>
          </div>
        </div>
      )}
    </>
  );
};
