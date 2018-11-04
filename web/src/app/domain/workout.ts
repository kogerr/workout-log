import { Attempt } from './attempt';
import { ClimbType } from './climb-type';

export class Workout {
    id: string;
    date: Date;
    workoutType: ClimbType;
    place: string;
    attempts: Array<Attempt>;
    notes: Array<string>;
}
