package com.koger.workoutlog.domain;

import java.util.List;
import java.util.Optional;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    @Id
    private String id;
    private final String emailAddress;
    private final Optional<Objective> objective;
    @DBRef
    private List<Workout> workouts;

    public User(@JsonProperty("emailAddress")String emailAddress, @JsonProperty("objective")Optional<Objective> objective, @JsonProperty("workouts")List<Workout> workouts) {
        this.emailAddress = emailAddress;
        this.objective = objective;
        this.workouts = workouts;
    }

    public Optional<Objective> getObjective() {
        return objective;
    }

    public List<Workout> getWorkouts() {
        return workouts;
    }

    public String getId() {
        return id;
    }

}
