import React from "react";

class CalendarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: (new Date()).getFullYear(),
      currentMonthName: '',
      currentMonth: 1,
      days: []
    } 
  }

  componentDidMount() {
    this.getDays();
  }

  getDays() {
    const months = this.props.months.map((item) =>
      { 
        if (item.id === this.state.currentMonth) {
          this.setState({days : item.days});
          this.setState({currentMonthName : item.month});
        }
      }
    );
    return {month: this.state.currentMonthName, days: this.state.days};
  }


  render() {
    const year = this.state.currentYear;
    const month = this.state.currentMonthName;
    const calendarDays = this.state.days.map((item) =>
      <a href="#" className="calendar-day" style={{backgroundColor: item.color}} key={item.day.toString()}>
        <span>{item.day}</span>
      </a>
    );
    return (
      <div className="calendar-detail">
        <h2 className="calendar-title">{month}</h2>
        <div className="calendar-days-wrapper">
          {calendarDays}
        </div>
      </div>
    );
  }
};

export default CalendarDetail;