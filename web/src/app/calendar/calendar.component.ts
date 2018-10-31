import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { Workout } from '../domain/workout';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  workouts = new Array<Array<Array<Workout>>>(12);

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

      if (!this.workouts[month]) {
        let monthLength = this.getMonthLength(year, month);
        this.workouts[month] = new Array(monthLength);
      }

      if (!this.workouts[month][day]) {
        this.workouts[month][day] = new Array();
      }

      this.workouts[month][day].push(workout);
    });
  }

  getMonthLength(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

}
