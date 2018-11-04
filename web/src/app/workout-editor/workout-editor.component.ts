import {Component, OnInit} from '@angular/core';
import {WorkoutSelectorService} from '../workout-selector.service';
import {Workout} from '../domain/workout';

@Component({
    selector: 'app-workout-editor',
    templateUrl: './workout-editor.component.html',
    styleUrls: ['./workout-editor.component.css']
})
export class WorkoutEditorComponent implements OnInit {
    content: Workout;

    constructor(private workoutSelector: WorkoutSelectorService) { }

    ngOnInit(): void {
        this.setContent();
    }

    private setContent(): void {
        let selectedWorkout = this.workoutSelector.get()[0];
        this.content = selectedWorkout ? selectedWorkout : new Workout();
    }

}
