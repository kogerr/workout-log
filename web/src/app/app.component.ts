import { Component, OnInit } from '@angular/core';
import { RestService } from './service/rest.service';
import { Workout } from './domain/workout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private restService: RestService) {}

  workouts: Array<Workout>;

  ngOnInit(): void {
    this.restService.getWorkouts().subscribe(data => this.workouts = data);
  }

  getWorkouts(): string {
    return JSON.stringify(this.workouts);
  }

}
