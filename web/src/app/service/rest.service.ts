import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../domain/workout';
import {Observable} from 'rxjs';
import {ModelParser} from '../util/model-parser';
import {map} from 'rxjs/operators';

const workoutURL = '/api/workout';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) {
    }

    getWorkouts(): Observable<Array<Workout>> {
        return this.http.get<Array<Workout>>(workoutURL).pipe(map(w => w.map(e => ModelParser.parseWorkout(e))));
    }

    deleteWorkout(id: string): Observable<Array<Workout>> {
        return this.http.delete<Array<Workout>>(workoutURL + '/' + id);
    }

}
