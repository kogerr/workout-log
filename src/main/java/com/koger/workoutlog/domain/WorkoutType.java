package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum WorkoutType {
    @JsonProperty("boulder")
    BOULDER,
    @JsonProperty("secured")
    SECURED,
    @JsonProperty("outdoor")
    OUTDOOR,
    @JsonProperty("mixed")
    MIXED
}
