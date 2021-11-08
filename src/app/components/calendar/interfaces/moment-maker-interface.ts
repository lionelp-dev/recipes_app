export interface MomentMakerInterface {
  getCurrentMoment(): Date;
  getCurrentDay(): number;
  getCurrentDate(): number;
  getCurrentYear(): number;
  getCurrentMonth(): number;
  setCurrentMonth(): void;
}
