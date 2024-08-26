import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // css import
import style from '../styles/CalendarView.module.css';

const CalendarView = () => {
  const today = new Date();
  const [value, onChange] = useState(new Date());
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  return (
    <div className={style.body}>
      <div className={style.titleView}>
        <p className={style.title}>Calendar</p>
      </div>

      <div className={style.calendarView}>
        <p className={style.dallyuk}>달력</p>
        <div className={style.settingView}>
          <div>
            <img src=".../public/asset/triangle-button-left.jpg" alt="" />
            <p className={style.dateSet}>{year}</p>
            <img src=".../public/asset/triangle-button-right.jpg" alt="" />
          </div>
          <div>
          <img src=".../public/asset/triangle-button-left.jpg" alt="" />
            <p className={style.dateSet}>{month}</p>
            <img src=".../public/asset/triangle-button-right.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;