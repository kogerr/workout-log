import {Component, Input, OnInit} from '@angular/core';
import {Workout} from '../../domain/workout';
import {DateTransformer} from '../../util/DateTransformer';
import {WorkoutSelectorService} from '../../workout-selector.service';
import {RestService} from '../../service/rest.service';
import {Router} from '@angular/router';
import {ClimbType} from '../../domain/climb-type';

const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI',
    'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const workoutColourMap = new Map<ClimbType, string>([
    [ClimbType.boulder, 'light-blue'],
    [ClimbType.roped, 'light-orange'],
    [ClimbType.outdoor, 'light-green']
]);

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    @Input() content: Workout;
    month: string;
    day: number;
    colourClass: string;

    constructor(private workoutSelector: WorkoutSelectorService, private restService: RestService, private router: Router) { }

    ngOnInit(): void {
        this.setDate(this.content.date);
        this.setColour();
    }

    private setDate(date: any): void {
        let {month, day}: { month: number, day: number } = DateTransformer.decompose(date);
        this.month = romanNumbers[month];
        this.day = day;
    }

    private setColour(): void {
        this.colourClass = workoutColourMap.get(this.content.workoutType);
    }

    unselect(): void {
        this.workoutSelector.clear();
    }

    deleteWorkout(): void {
        this.unselect();
        this.restService.deleteWorkout(this.content.id).subscribe(() => this.router.navigate(['/calendar']));
    }

}
