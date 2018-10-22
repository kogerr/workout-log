package com.koger.workoutlog.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.koger.workoutlog.domain.Workout;
import com.koger.workoutlog.repositories.WorkoutRepository;

@Service
public class WorkoutService {
    private final WorkoutRepository workoutRepository;

    public WorkoutService(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    public List<Workout> getWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout addWorkout(Workout newWorkout) {
        return workoutRepository.insert(newWorkout);
    }

}
