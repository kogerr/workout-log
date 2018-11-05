import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Attempt} from '../../../domain/attempt';
import {ClimbType} from '../../../domain/climb-type';
import {Colour} from '../../../domain/colour';

const workoutColourMap = new Map<ClimbType, string>([
    [ClimbType.boulder, 'light-blue'],
    [ClimbType.roped, 'light-orange'],
    [ClimbType.outdoor, 'light-green']
]);

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
    @Input() content: Attempt;
    @HostBinding('class') class: string;

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

    getOutline(): string {
        if (this.content.track.colour === Colour.white) {
            let colour: string;
            switch (this.content.track.type) {
                case ClimbType.boulder:
                    colour = '#dfeff7';
                    break;
                case ClimbType.roped:
                    colour = '#f7eddf';
                    break;
                case ClimbType.outdoor:
                    colour = '#dff5ed';
                    break;
                default:
                    colour = '#dfeff7';
            }
            return '1px solid ' + colour;
        } else {
            return 'none';
        }
    }

}
