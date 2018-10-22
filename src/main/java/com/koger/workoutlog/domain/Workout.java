package com.koger.workoutlog.domain;

import java.time.LocalDateTime;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Workout {
    private final LocalDateTime date;
    private final WorkoutType workoutType;
    private final String place;
    private final Attempt[] attempts;
    private final Optional<String[]> notes;

    public Workout(@JsonProperty("date") LocalDateTime date, @JsonProperty("workoutType") WorkoutType workoutType,
        @JsonProperty("place") String place, @JsonProperty("attempts") Attempt[] attempts, @JsonProperty("notes") String[] notes) {
        this.date = date;
        this.workoutType = workoutType;
        this.place = place;
        this.attempts = attempts;
        this.notes = Optional.ofNullable(notes);
    }

    public LocalDateTime getDate() {
        return date;
    }

    public WorkoutType getWorkoutType() {
        return workoutType;
    }

    public String getPlace() {
        return place;
    }

    public Attempt[] getAttempts() {
        return attempts;
    }

    public String[] getNotes() {
        return notes.orElse(null);
    }

}
