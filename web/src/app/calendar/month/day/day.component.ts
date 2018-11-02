import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {Workout} from '../../../domain/workout';
import {Router} from '@angular/router';

const workoutColourMap = new Map([
  ['boulder', 'blue'],
  ['secured', 'orange'],
  ['outdoor', 'green']
]);

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() workouts: Array<Workout>;
  @Input() number: number;
  @HostBinding('class') class: string;
  @HostListener('click')
  onClick(): void {
    this.router.navigate(['statistics'])
      .then(() => { });
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.decideColour();
  }

  private decideColour(): void {
    if (!this.workouts) {
      this.class = 'empty';
    } else {
      let firstWorkoutType = this.workouts[0].workoutType;
      this.class =  workoutColourMap.get(firstWorkoutType);
    }
  }

}
