package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Colour {
    @JsonProperty("white")
    WHITE,
    @JsonProperty("yellow")
    YELLOW,
    @JsonProperty("brown")
    BROWN,
    @JsonProperty("green")
    GREEN,
    @JsonProperty("blue")
    BLUE,
    @JsonProperty("red")
    RED,
    @JsonProperty("purple")
    PURPLE,
    @JsonProperty("pink")
    PINK,
    @JsonProperty("black")
    BLACK
}
