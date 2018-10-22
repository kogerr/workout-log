package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Difficulty {
    private final int primary;
    private final String secondary;

    public Difficulty(@JsonProperty("primary") int primary, @JsonProperty("secondary") String secondary) {
        this.primary = primary;
        this.secondary = secondary;
    }

    public int getPrimary() {
        return primary;
    }

    public String getSecondary() {
        return secondary;
    }
}
