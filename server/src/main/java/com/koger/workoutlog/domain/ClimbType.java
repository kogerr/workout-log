package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ClimbType {
    @JsonProperty("boulder")
    BOULDER,
    @JsonProperty("roped")
    ROPED,
    @JsonProperty("outdoor")
    OUTDOOR
}