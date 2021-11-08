import { MomentMaker } from "./moment-maker";
import { MomentMakerInterface } from "./interfaces/moment-maker-interface";

export class CalendarProtocol {
  buildCalendar(moment: MomentMakerInterface) {
    const curentMoment: Date = moment.getCurrentMoment();
    const currentDay: number = moment.getCurrentDay();
    const currentDate: number = moment.getCurrentDate();
    const currentYear: number = moment.getCurrentYear();
    const currentMonth: number = moment.getCurrentMonth();
    const lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDay();
    let numberOfDaysInLastMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();
    const numberOfDaysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    let daysInCurrentMonth: Array<number> = [];

    for (let a: number = lastDayOfLastMonth; a > 0; a--) {
      daysInCurrentMonth.push(numberOfDaysInLastMonth - a + 1);
    }
    for (let b: number = 1; b <= numberOfDaysInCurrentMonth; b++) {
      daysInCurrentMonth.push(b);
    }

    return {
      curentMoment,
      currentDay,
      currentDate,
      currentMonth,
      currentYear,
      daysInCurrentMonth,
    };
  }
  changeCurrentMonth(moment: MomentMakerInterface, value: string) {
    const currentMonth: number = moment.getCurrentMonth();
    if (value === "prevMonth") {
      moment.setCurrentMonth(currentMonth - 1);
    } else if (value === "nextMonth") {
      moment.setCurrentMonth(currentMonth + 1);
    }
  }
}
