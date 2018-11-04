package com.koger.workoutlog.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.koger.workoutlog.domain.User;
import com.koger.workoutlog.domain.Workout;
import org.springframework.stereotype.Service;

import com.koger.workoutlog.repositories.UserRepository;
import com.koger.workoutlog.repositories.WorkoutRepository;

@Service
public class WorkoutService {
    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;

    public WorkoutService(WorkoutRepository workoutRepository, UserRepository userRepository) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
    }

    public List<Workout> getWorkouts(String authorization) {
        String emailAddress = authorization;
        User currentUser = userRepository.getByEmailAddress(emailAddress);
        List<Workout> workouts = currentUser.getWorkouts();
        workouts.sort(Comparator.comparing(Workout::getDate));
        return workouts;
    }

    public User addWorkout(Workout newWorkout, String authorization) {
        String emailAddress = authorization;
        User currentUser = userRepository.getByEmailAddress(emailAddress);
        Workout storedWorkout = workoutRepository.insert(newWorkout);
        currentUser.getWorkouts().add(storedWorkout);
        return userRepository.save(currentUser);
    }

    public User addUser(User newUser) {
        newUser.getWorkouts().forEach(workout -> {
            workout = workoutRepository.insert(workout);
        });
        return userRepository.save(newUser);
    }

    public User newUser(String emailAddress) {
        return userRepository.insert(new User(emailAddress, Optional.empty(), Collections.emptyList()));
    }

    public Workout updateWorkout(Workout workout, String authorization) {
        String emailAddress = authorization;
        User currentUser = userRepository.getByEmailAddress(emailAddress);
        if (currentUser.getWorkouts().stream().anyMatch(w -> w.getId().equals(workout.getId()))) {
            return workoutRepository.save(workout);
        } else {
            throw new RuntimeException();
        }
    }

    public List<Workout> removeWorkout(String id, String authorization) {
        String emailAddress = authorization;
        User currentUser = userRepository.getByEmailAddress(emailAddress);
        if (currentUser.getWorkouts().stream().anyMatch(workout -> workout.getId().equals(id))) {
            workoutRepository.deleteById(id);
            List<Workout> workouts = currentUser.getWorkouts();
            workouts = workouts.stream().filter(workout -> !workout.getId().equals(id)).collect(Collectors.toList());
            userRepository.save(currentUser);
            return userRepository.getByEmailAddress(emailAddress).getWorkouts();
        } else {
            throw new RuntimeException();
        }
    }

}
