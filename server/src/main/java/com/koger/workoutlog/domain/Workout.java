package com.koger.workoutlog.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Workout {
    @Id
    private String id;
    private final LocalDateTime date;
    private final ClimbType workoutType;
    private final String place;
    private final Attempt[] attempts;
    private final String[] notes;

    public Workout(@JsonProperty("date") LocalDateTime date, @JsonProperty("workoutType") ClimbType workoutType,
        @JsonProperty("place") String place, @JsonProperty("attempts") Attempt[] attempts, @JsonProperty("notes") String[] notes) {
        this.date = date;
        this.workoutType = workoutType;
        this.place = place;
        this.attempts = attempts;
        this.notes = notes;
    }

    public String getId() {
        return id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public ClimbType getWorkoutType() {
        return workoutType;
    }

    public String getPlace() {
        return place;
    }

    public Attempt[] getAttempts() {
        return attempts;
    }

    public String[] getNotes() {
        return notes;
    }

    public void setId(String id) {
        this.id = id;
    }

}
