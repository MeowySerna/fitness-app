import React from "react";
import Timer from "./Timer";
import WorkoutCard from "./WorkoutCard";
import { cards } from "./constants";
import Statistic from "./Statistic";

export default function Today() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const currentDay = days[dayOfWeek];
  return (
    <section className="today">
      <div className="today__task-container">
      <h1 className="today__title">Today Task</h1>
      <p className="today__date">
        {new Intl.DateTimeFormat("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
        })
          .format(new Date())
          .replace(/(\s?\г\.?)/, "")}
      </p>
      
        <div className="today__legend">
          <p className="today__mark">workout</p>
          <p className="today__mark">times</p>
          <p className="today__mark">sets</p>
          <p className="today__mark">Ⅰ</p>
          <p className="today__mark">II</p>
          <p className="today__mark">III</p>
          <p className="today__mark">IV</p>
          <p className="today__mark">weight</p>
          <p className="today__mark"></p>
          <p className="today__mark"></p>
        </div>
        <div className="today__card-container">
          {cards.map((card) =>
            card.day === currentDay ? (
              <WorkoutCard key={card.id} card={card} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <Timer />
     <Statistic/>
    </section>
  );
}
