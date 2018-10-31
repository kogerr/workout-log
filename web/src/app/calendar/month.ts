import { Workout } from '../domain/workout';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export class Month {
    days: Array<Array<Workout>>;
    name: string;
    monthNumber: any;
    year: number;

    private static getMonthLength(year: number, month: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    constructor(year: number, month: number) {
        this.name = monthNames[month];
        let length = Month.getMonthLength(year, month);
        this.days = new Array<Array<Workout>>(length);
        this.monthNumber = month;
        this.year = year;
    }

}
