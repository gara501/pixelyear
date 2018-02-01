import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import CalendarMonth from "./calendarMonth.js";
import CalendarDetail from "./calendarDetail.js";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import bg from "../images/mood-bg.jpg";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  getMonthDays(month) {
    const totalDays = new Date((new Date()).getFullYear(), month, 0).getDate();
    const days = [];
    for (let i = 1; i<= totalDays; i++) {
      days.push({day: i, color: '', comments: []});
    }
    return days;
  }

  render() {
    const months = [
      {month: 'Enero', id: 1, total: 0, days:this.getMonthDays(1)},
      {month: 'Febrero',id: 2, total: 0, days:this.getMonthDays(2)},
      {month: 'Marzo',id:3, total: 0, days:this.getMonthDays(3)},
      {month: 'Abril',id:4, total: 0, days:this.getMonthDays(4)},
      {month: 'Mayo', id:5, total: 0, days:this.getMonthDays(5)},
      {month: 'Junio',id:6, total: 0, days:this.getMonthDays(6)},
      {month: 'Julio',id:7, total: 0, days:this.getMonthDays(7)},
      {month: 'Agosto',id:8, total: 0, days:this.getMonthDays(8)},
      {month: 'Septiembre',id:9, total: 0, days:this.getMonthDays(9)},
      {month: 'Octubre',id:10, total: 0, days:this.getMonthDays(10)},
      {month: 'Noviembre', id:11, total: 0, days:this.getMonthDays(11)},
      {month: 'Diciembre', id:12, total: 0, days:this.getMonthDays(12)}
    ]
    return (
      <div className="calendar">
        <CalendarMonth months={months}></CalendarMonth>
        <CalendarDetail months={months}></CalendarDetail>
      </div>
    );
  }
};

export default Calendar;