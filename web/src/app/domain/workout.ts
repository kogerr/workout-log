import { Attempt } from './attempt';
import { WorkoutType } from './workout-type';

export interface Workout {
    id: string;
    date: Date;
    workoutType: WorkoutType;
    place: string;
    attempts: Array<Attempt>;
    notes: Array<string>;
}
