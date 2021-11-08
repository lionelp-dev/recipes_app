import { MomentInterface } from "./moment-interface";

export class Moment implements MomentInterface {
  private date: Date;

  constructor() {
    this.date = new Date();
  }

  public get getMoment() {
    return this.date;
  }

  public get getDay() {
    return this.date.getDay();
  }

  public get getDate() {
    return this.date.getDate();
  }

  public get getYear() {
    return this.date.getFullYear();
  }

  public get getMonth() {
    return this.date.getMonth();
  }

  public set setMonth(value: number) {
    this.date = new Date(this.date.setMonth(value));
  }
}
