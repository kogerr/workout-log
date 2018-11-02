import {Component, OnInit} from '@angular/core';
import {RestService} from '../service/rest.service';
import {Workout} from '../domain/workout';
import {Month} from './month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  months = new Array<Month>();

  constructor(private restService: RestService) {
  }

  private static parseDate(date: Date): { year: number, month: number, day: number } {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return {year, month, day};
  }

  ngOnInit(): void {
    this.restService.getWorkouts().subscribe(data => this.sortWorkouts(data));
  }

  sortWorkouts(workouts: Array<Workout>): void {
    workouts.forEach(workout => {
      let {year, month, day}: { year: number, month: number, day: number } =
        CalendarComponent.parseDate(new Date(Date.parse(workout.date as any)));
      let targetMonth = this.getTargetMonth(month, year);
      this.addWorkout(targetMonth, day, workout);
    });
    this.secureCurrentMonth();
  }

  private addWorkout(targetMonth: Month, day: number, workout: Workout): void {
    if (!targetMonth.days[day]) {
      targetMonth.days[day] = new Array<Workout>();
    }
    targetMonth.days[day].push(workout);
  }

  private getTargetMonth(month: number, year: number): Month {
    let targetMonth = this.months.find(m => m.monthNumber === month);
    if (!targetMonth) {
      targetMonth = new Month(year, month);
      this.months.push(targetMonth);
    }
    return targetMonth;
  }

  private secureCurrentMonth(): Month {
    let {year, month}: { year: number, month: number } = CalendarComponent.parseDate(new Date());
    return this.getTargetMonth(month, year);
  }

}
