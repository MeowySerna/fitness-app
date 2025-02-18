import React from "react";
import { cards } from "./constants";
import ScheduleCard from "./ScheduleCard";

export default function schedule() {
  return (
    <section className="schedule">
      <h1 className="schedule__title">Schedule</h1>
      <div className="schedule__day-container">
        <h2 className="schedule__day-title">Monday</h2>
        <div className="schedule__legend">
          <p className="schedule__mark">workout</p>
          <p className="schedule__mark">times</p>
          <p className="schedule__mark">sets</p>
          <p className="schedule__mark">weight</p>
        </div>
        <div className="schedule__card-container">
          {cards.map((card) =>
            card.day === "Понедельник" ? (
              <ScheduleCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="schedule__day-container">
        <h2 className="schedule__day-title">Tuesday</h2>
        <div className="schedule__legend">
          <p className="schedule__mark">workout</p>
          <p className="schedule__mark">times</p>
          <p className="schedule__mark">sets</p>
          <p className="schedule__mark">weight</p>
        </div>
        <div className="schedule__card-container">
          {cards.map((card) =>
            card.day === "Вторник" ? (
              <ScheduleCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="schedule__day-container">
        <h2 className="schedule__day-title">Wednesday</h2>
        
        <div className="schedule__legend">
          <p className="schedule__mark">workout</p>
          <p className="schedule__mark">times</p>
          <p className="schedule__mark">sets</p>
          <p className="schedule__mark">weight</p>
        </div>
        <div className="schedule__card-container">
          {cards.map((card) =>
            card.day === "Среда" ? (
              <ScheduleCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="schedule__day-container">
        <h2 className="schedule__day-title">Thursday</h2>
        <div className="schedule__legend">
          <p className="schedule__mark">workout</p>
          <p className="schedule__mark">times</p>
          <p className="schedule__mark">sets</p>
          <p className="schedule__mark">weight</p>
        </div>
        <div className="schedule__card-container">
          {cards.map((card) =>
            card.day === "Четверг" ? (
              <ScheduleCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="schedule__day-container">
        <h2 className="schedule__day-title">Friday</h2>
        <div className="schedule__legend">
          <p className="schedule__mark">workout</p>
          <p className="schedule__mark">times</p>
          <p className="schedule__mark">sets</p>
          <p className="schedule__mark">weight</p>
        </div>
        <div className="schedule__card-container">
          {cards.map((card) =>
            card.day === "Пятница" ? (
              <ScheduleCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
}
