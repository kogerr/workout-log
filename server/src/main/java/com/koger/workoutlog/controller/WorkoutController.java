package com.koger.workoutlog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.koger.workoutlog.domain.User;
import com.koger.workoutlog.domain.Workout;
import com.koger.workoutlog.service.WorkoutService;

@RestController
public class WorkoutController {
    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @RequestMapping(value = "/api/workout", method = RequestMethod.GET)
    public List<Workout> getWorkouts(@RequestHeader("Authorization") String authorization) {
        return workoutService.getWorkouts(authorization);
    }

    @RequestMapping(value = "/api/workout", method = RequestMethod.POST)
    public User addWorkout(@RequestBody Workout newWorkout, @RequestHeader("Authorization") String authorization) {
        return workoutService.addWorkout(newWorkout, authorization);
    }

    @RequestMapping(value = "/api/workout", method = RequestMethod.PATCH)
    public Workout updateWorkout(@RequestBody Workout newWorkout, @RequestHeader("Authorization") String authorization) {
        return workoutService.updateWorkout(newWorkout, authorization);
    }

    @RequestMapping(value = "/api/workout/{id}", method = RequestMethod.DELETE)
    public List<Workout> removeWorkout(@PathVariable String id, @RequestHeader("Authorization") String authorization) {
        return workoutService.removeWorkout(id, authorization);
    }

    @RequestMapping(value = "/api/user", method = RequestMethod.POST)
    public User addUser(@RequestBody User newUser) {
        return workoutService.addUser(newUser);
    }

}
