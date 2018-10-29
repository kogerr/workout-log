package com.koger.workoutlog.domain;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Objective {
    private final LocalDate from;
    private final LocalDate to;
    private final int workoutsPerWeek;

    public Objective(@JsonProperty("from")LocalDate from, @JsonProperty("to")LocalDate to, @JsonProperty("workoutsPerWeek")int workoutsPerWeek) {
        this.from = from;
        this.to = to;
        this.workoutsPerWeek = workoutsPerWeek;
    }

    public LocalDate getFrom() {
        return from;
    }

    public LocalDate getTo() {
        return to;
    }

    public int getWorkoutsPerWeek() {
        return workoutsPerWeek;
    }

}
