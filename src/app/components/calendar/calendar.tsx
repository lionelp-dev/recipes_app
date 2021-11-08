import React from "react";
import { CalendarProtocol } from "./calendar-protocole";
import { MomentMaker } from "./moment-maker";
import { Moment } from "./moment";

interface ICalendarState {
  calendar: {
    currentMonth: number;
  };
}
interface ICalendarProps {}

const moment = new MomentMaker(new Moment());
const calendarProtocole = new CalendarProtocol();
const calendar = calendarProtocole.buildCalendar(moment);

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
  constructor(props: ICalendarProps) {
    super(props);
    this.state = {
      calendar: calendar,
    };

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  handleChangeMonth(value: string) {
    calendarProtocole.changeCurrentMonth(moment, value);
    this.setState({
      calendar: calendarProtocole.buildCalendar(moment),
    });
  }

  componentDidMount() {}

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default Calendar;
