import { MomentInterface } from "./interfaces/moment-interface";
import { MomentMakerInterface } from "./interfaces/moment-maker-interface";

export class MomentMaker implements MomentMakerInterface {
  private moment: MomentInterface;
  constructor(moment: MomentInterface) {
    this.moment = moment;
  }

  getCurrentMoment(): Date {
    return this.moment.getMoment;
  }

  getCurrentDay(): number {
    return this.moment.getDay;
  }

  getCurrentDate(): number {
    return this.moment.getDate;
  }

  getCurrentYear(): number {
    return this.moment.getYear;
  }

  getCurrentMonth(): number {
    return this.moment.getMonth;
  }
  setCurrentMonth(value: number) {
    this.moment.setMonth = value;
  }
}
