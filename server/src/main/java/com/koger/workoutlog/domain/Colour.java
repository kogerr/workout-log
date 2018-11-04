package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Colour {
    WHITE("white"),
    YELLOW("yellow"),
    BROWN("brown"),
    GREEN("green"),
    BLUE("blue"),
    RED("red"),
    PURPLE("purple"),
    PINK("pink"),
    BLACK("black");

    private final String value;

    Colour(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

}
