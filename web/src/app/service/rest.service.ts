import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../domain/workout';
import { Observable } from 'rxjs';

const workoutURL = '/api/workout';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Array<Workout>> {
    return this.http.get<Array<Workout>>(workoutURL);
  }

}
