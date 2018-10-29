import { Objective } from './objective';
import { Workout } from './workout';

export interface User {
    emailAddress: string;
    objective: Objective;
    workouts: Array<Workout>;
}
