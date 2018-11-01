import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { Workout } from '../domain/workout';
import { Month } from './month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  months = new Array<Month>();

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getWorkouts().subscribe(data => this.sortWorkouts(data));
  }

  sortWorkouts(workouts: Array<Workout>): void {
    workouts.forEach(workout => {
      let workoutDate = new Date(Date.parse(workout.date as any));
      let year = workoutDate.getFullYear();
      let month = workoutDate.getMonth();
      let day = workoutDate.getDate();

      let targetMonth = this.months.find(m => m.monthNumber === month);
      if (!targetMonth) {
        targetMonth = new Month(year, month);
        this.months.push(targetMonth);
      }

      if (!targetMonth.days[day]) {
        targetMonth.days[day] = new Array<Workout>();
      }

      targetMonth.days[day].push(workout);
    });
  }

}
