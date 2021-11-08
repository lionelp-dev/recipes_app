import { CalendarProtocol } from "./calendar-protocole";
import { MomentMaker } from "./moment-maker";
import { Moment } from "./moment";

describe("CalendarProtocole", () => {
  it("should return an object with current date elements", () => {
    //Arrange
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2021, 10, 7));

    const moment = new MomentMaker(new Moment());
    const expectedResult = {
      curentMoment: new Date(),
      currentDay: 0,
      currentDate: 7,
      currentMonth: 10,
      currentYear: 2021,
      daysInCurrentMonth: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    };
    //Act
    const calandarProtocole = new CalendarProtocol();
    const calendar = calandarProtocole.buildCalendar(moment);
    //Assert
    expect(calendar).toStrictEqual(expectedResult);
    jest.useRealTimers();
  });

  it("should return an object with the next month elements", () => {
    //Arrange
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2021, 10, 7));

    const moment = new MomentMaker(new Moment());
    const expectedResult = {
      curentMoment: new Date(2021, 11, 7),
      currentDay: 2,
      currentDate: 7,
      currentMonth: 11,
      currentYear: 2021,
      daysInCurrentMonth: [
        29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    };
    //Act
    const calandarProtocole = new CalendarProtocol();
    calandarProtocole.changeCurrentMonth(moment, "nextMonth");
    const calendar = calandarProtocole.buildCalendar(moment);
    //Assert
    expect(calendar).toStrictEqual(expectedResult);
    jest.useRealTimers();
  });
});
