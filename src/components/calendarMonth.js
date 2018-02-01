import React from "react";

class CalendarMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: (new Date()).getFullYear()
    } 
  }
  render() {
    const year = this.state.currentYear;
    const months = this.props.months.map((item) =>
      <a href="#" className="calendar-month-block" key={item.month.toString()}>
        <h4>{item.month}</h4>
        <span>{item.total}</span>
      </a>
    );
    return (
      <div className="calendar-month">
        <h4 className="calendar-year">{year}</h4>
        {months}
      </div>
    );
  }
};

export default CalendarMonth;