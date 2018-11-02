import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Workout} from '../../domain/workout';
import {DateTransformer} from '../../util/DateTransformer';

const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI',
    'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    @Input() content: Workout;
    @HostBinding('class') class: string;
    month: string;
    day: number;

    constructor() {
    }

    ngOnInit(): void {
        this.class = 'blue';
        this.setDate(this.content.date);
    }

    private setDate(date: any): void {
        let {month, day}: { month: number, day: number } = DateTransformer.decompose(new Date(date));
        this.month = romanNumbers[month];
        this.day = day + 1;
    }

}
