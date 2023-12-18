import React, { FC } from "react";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
dayjs.locale(ja);

interface CalendarProps {
  children?: React.ReactNode;
}

const Calendar = () => {
  // 今日の日付を取得
  const today = dayjs();
  console.log(today);

  const getCurrentMonth = dayjs().month() + 1;
  console.log(getCurrentMonth);

  const year = dayjs().year();
  console.log(year);
  return (
    <div>
      <h1>Calendar</h1>
      <p>{today.format("MM")}</p>
    </div>
  );
};

export default Calendar;
