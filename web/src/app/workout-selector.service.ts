import {Injectable} from '@angular/core';
import {Workout} from './domain/workout';

const key = 'selected';

@Injectable({
    providedIn: 'root'
})
export class WorkoutSelectorService {
    public set(selected: Array<Workout>): void {
        localStorage.setItem(key, JSON.stringify(selected));
    }

    public get(): Array<Workout> {
        return JSON.parse(localStorage.getItem(key)) as Array<Workout>;
    }

    public clear(): void {
        localStorage.removeItem(key);
    }

}
