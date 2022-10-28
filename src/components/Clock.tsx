import React from "react";

export type ClockProps = {
  timerDays: number;
  timerHours: number;
  timerMinutes: number;
  timerSeconds: number;
};

const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}: ClockProps) => {
  return (
    <>
      <div className="flex text-white gap-2 items-center">
        <section>
          <p className="text-5xl">{timerDays}</p>
          <small>Dias</small>
        </section>
        <span className="text-5xl">:</span>
        <section>
          <p className="text-5xl">{timerHours}</p>
          <small>Horas</small>
        </section>
        <span className="text-5xl">:</span>
        <section>
          <p className="text-5xl">{timerMinutes}</p>
          <small>Minutos</small>
        </section>
        <span className="text-5xl">:</span>
        <section>
          <p className="text-5xl">{timerSeconds}</p>
          <small>Segundos</small>
        </section>
      </div>
    </>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
