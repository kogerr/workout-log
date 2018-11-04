import { Colour } from './colour';
import {ClimbType} from './climb-type';
import {Grade} from './grade';

export interface Track {
    type: ClimbType;
    colour: Colour;
    secondaryColour: Colour;
    grade: Grade;
    number: number;
}
