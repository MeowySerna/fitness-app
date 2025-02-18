import React, { useState } from "react";

export default function WorkoutCard({ card }) {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [sets, setSets] = useState(0);
  const [stopClicked, setStopClicked] = useState(false);

  const startTimer = () => {
    const now = new Date();
    setStartTime(now);
    setEndTime(null);
    setElapsedTime(null);
    setSets((prevSets) => prevSets + 1);
    setStopClicked(false);
  };

  const stopTimer = () => {
    const now = new Date();
    setEndTime(now);
    const elapsed = startTime
      ? (now.getTime() - startTime.getTime()) / 1000
      : 0;
    setElapsedTime(elapsed);
    setStopClicked(true);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes} minutes ${seconds} seconds`;
  };
  return (
    <div className="card">
      <p className="card__text">{card.workout}</p>
      <p className="card__text">{card.times}</p>
      <p className="card__text">
        {sets}
        <button className="card__add-button" onClick={startTimer}></button>
      </p>
      <input type="text" className="card__input" maxLength={3}/>
      <input type="text" className="card__input" maxLength={3}/>
      <input type="text" className="card__input" maxLength={3}/>
      <input type="text" className="card__input" maxLength={3}/>
      <p className="card__text">{card.weight}</p>
      <button className="card__button" onClick={stopTimer}>
        stop
      </button>
      <div
        className={`card__checkbox ${
          sets === 4 && stopClicked ? "card__checkbox_visible" : ""
        }`}
      >
        <div>
          {elapsedTime !== null && (
            <p>Elapsed time: {formatTime(elapsedTime)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
