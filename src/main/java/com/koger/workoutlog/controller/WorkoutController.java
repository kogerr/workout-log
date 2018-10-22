package com.koger.workoutlog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.koger.workoutlog.domain.Workout;
import com.koger.workoutlog.service.WorkoutService;

@RestController
public class WorkoutController {
    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @RequestMapping(value = "/api/workout", method = RequestMethod.GET)
    public List<Workout> getWorkouts() {
        return workoutService.getWorkouts();
    }

    @RequestMapping(value = "/api/workout", method = RequestMethod.POST)
    public Workout addWorkout(@RequestBody Workout newWorkout) {
        return workoutService.addWorkout(newWorkout);
    }

}
