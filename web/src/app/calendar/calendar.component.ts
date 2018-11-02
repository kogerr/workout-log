import {Component, OnInit} from '@angular/core';
import {RestService} from '../service/rest.service';
import {Workout} from '../domain/workout';
import {Month} from './month';
import {DateTransformer} from '../util/DateTransformer';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  months = new Array<Month>();

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getWorkouts().subscribe(data => this.sortWorkouts(data));
  }

  sortWorkouts(workouts: Array<Workout>): void {
    workouts.forEach(workout => {
      let {year, month, day}: { year: number, month: number, day: number } =
        DateTransformer.decompose(new Date(Date.parse(workout.date as any)));
      let targetMonth = this.getTargetMonth(month, year);
      targetMonth.addWorkout(day, workout);
    });
    this.secureCurrentMonth();
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
    let {year, month}: { year: number, month: number } = DateTransformer.decompose(new Date());
    return this.getTargetMonth(month, year);
  }

}
