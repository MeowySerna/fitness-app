import React from 'react'

export default function ScheduleCard({card}) {
  return (
    <div className="schedule-card">
        <p className="schedule-card__text">{card.workout}</p>
        <p className="schedule-card__text">{card.times}</p>
        <p className="schedule-card__text">{card.sets}</p>
        <p className="schedule-card__text">{card.weight}</p>
    </div>
  )
}
