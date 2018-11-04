import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Attempt} from '../../../domain/attempt';

const workoutColourMap = new Map([
    ['boulder', 'light-blue'],
    ['roped', 'light-orange'],
    ['outdoor', 'light-green']
]);

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
    @Input() content: Attempt;
    @HostBinding('class') class = '';

    ngOnInit(): void {
        this.setStyle();
    }

    private setStyle(): void {
        this.class = this.getColumns() + ' ' + this.getColour();
    }

    private getColumns(): string {
        return this.content.track.number ? 'four-column-grid' : 'three-column-grid';
    }

    private getColour(): string {
        return workoutColourMap.get(this.content.track.type);
    }

    getGradeColumns(): string {
        return this.content.track.secondaryColour && this.content.track.grade ? 'auto auto' : 'auto';
    }

}
