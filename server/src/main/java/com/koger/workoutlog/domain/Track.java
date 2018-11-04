package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Track {
    private final ClimbType type;
    private final Colour colour;
    private final Colour secondaryColour;
    private final Grade grade;
    private final Integer number;

    public Track(@JsonProperty("type")ClimbType type, @JsonProperty("colour")Colour colour,
                 @JsonProperty("secondaryColour")Colour secondaryColour, @JsonProperty("grade") Grade grade,
                 @JsonProperty("number") Integer number) {
        this.type = type;
        this.colour = colour;
        this.secondaryColour = secondaryColour;
        this.grade = grade;
        this.number = number;
    }

    public Colour getColour() {
        return colour;
    }

    public Colour getSecondaryColour() {
        return secondaryColour;
    }

    public Grade getGrade() {
        return grade;
    }

    public Integer getNumber() {
        return number;
    }

    public ClimbType getType() {
        return type;
    }

}
