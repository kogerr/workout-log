import {Workout} from '../domain/workout';

export class ModelParser {
    public static parseWorkout(inputWorkout: any): Workout {
        let workout = Object.assign(new Workout(), inputWorkout);
        workout.date = new Date(workout.date);
        return workout;
    }

}
