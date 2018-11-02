import {Component} from '@angular/core';
import {WorkoutSelectorService} from '../workout-selector.service';
import {Workout} from '../domain/workout';

@Component({
    template: '<app-workout *ngFor="let workout of list" [content]="workout"></app-workout>',
    styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
    list: Array<Workout>;

    constructor(workoutSelector: WorkoutSelectorService) {
        this.list = workoutSelector.get();
    }

}
