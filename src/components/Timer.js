import React, { useState, useEffect } from "react";
export default function Timer() {
  let initialMinutes = 2;
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false); 
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft - minutes * 60).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setTimeLeft((timeLeft) => {
          if (timeLeft <= 0) {
            setIsBlinking(true); 
            return 0;
          } else {
            setIsBlinking(false); 
            return timeLeft - 1;
          }
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setTimeLeft(initialMinutes * 60);
    setIsBlinking(false); 
  };

  const handleAdd = () => {
    setTimeLeft((prevTimeLeft) => prevTimeLeft + 60);
  };

  const handlSubtract = () => {
    setTimeLeft((prevTimeLeft) =>
      prevTimeLeft <= 0 ? prevTimeLeft : prevTimeLeft - 60
    );
  };

  return (
    <div className="timer">
      <h1 className="timer__title">Timer</h1>
      <div className="timer__inputs">
        <button
          className="timer__subtract-button"
          onClick={handlSubtract}
        ></button>
        <input
          type="text"
          className={`timer__input ${isBlinking ? "timer__input_blink" : ""}`}
          value={minutes}
          disabled
        />
        :
        <input
          type="text"
          className={`timer__input ${isBlinking ? "timer__input_blink" : ""}`}
          value={seconds}
          disabled
        />
        <button className="timer__add-button" onClick={handleAdd}></button>
      </div>
      <div className="timer__buttons">
        {isCounting ? (
          <button onClick={handleStop} className="timer__button">
            stop
          </button>
        ) : (
          <button onClick={handleStart} className="timer__button">
            start
          </button>
        )}
        <button onClick={handleReset} className="timer__button">
          reset
        </button>
      </div>
    </div>
  );
}
