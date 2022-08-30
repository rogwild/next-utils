import React from "react";

import SmartButton from "../../../../smart-button";
import { getPastDay, getMonthRange } from "../../../../../vanilla";

const TimeframeBlock = ({
  containerClassName = ``,
  onChange,
  activeTimeframe,
}) => (
  <div className={`${containerClassName} flex flex-col h-full`}>
    {timeframes.map((item, index) => {
      // return <div></div>;
      return (
        <SmartButton
          key={index}
          variant="calendar"
          className={`${
            activeTimeframe === item.title
              ? `@oy bg-opacity-10 bg-blue-650 @ttc text-blue-650`
              : `bg-transparent my-px`
          }  whitespace-nowrap border-none cursor-pointer @jyc justify-start hover:bg-opacity-10 hover:bg-blue-650`}
          onClick={() => onChange({ title: item.title, value: item.timeframe })}
        >
          {item.title}
        </SmartButton>
      );
    })}
  </div>
);

export default TimeframeBlock;

const dateNow = new Date();

const getDayOfWeek = (date, term) => {
  const day = date.getDay(); // check work on Sunday. Need to check on other day
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + term - day
  );
};

const timeframes = [
  {
    title: `Today`,
    timeframe: dateNow,
  },
  {
    title: `Yesterday`,
    timeframe: getPastDay(1),
  },
  {
    title: `This week`,
    timeframe: [
      getDayOfWeek(dateNow, dateNow.getDay() === 0 ? -6 : 1),
      getDayOfWeek(dateNow, dateNow.getDay() === 0 ? 0 : 7),
    ],
  },
  {
    title: `Last week`,
    timeframe: [
      getDayOfWeek(dateNow, dateNow.getDay() === 0 ? -13 : -6),
      getDayOfWeek(dateNow, dateNow.getDay() === 0 ? -7 : 0),
    ],
  },
  {
    title: `This month`,
    timeframe: getMonthRange({
      date: dateNow,
      lastDayQuantity: 1,
    }),
  },
  {
    title: `Last month`,
    timeframe: getMonthRange({ date: dateNow, firstDayQuantity: 1 }),
  },
  {
    title: `Custom`,
    timeframe: dateNow,
  },
];
