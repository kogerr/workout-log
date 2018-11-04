import { Attempt } from './attempt';
import { ClimbType } from './climb-type';

export interface Workout {
    id: string;
    date: Date;
    workoutType: ClimbType;
    place: string;
    attempts: Array<Attempt>;
    notes: Array<string>;
}
