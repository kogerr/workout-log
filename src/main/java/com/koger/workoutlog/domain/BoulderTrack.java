package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeName("boulder")
public class BoulderTrack extends Track {
    private final Colour secondaryColour;
    private final Integer number;

    @JsonCreator
    public BoulderTrack(@JsonProperty("colour") Colour colour, @JsonProperty("secondaryColour") Colour secondaryColour, Integer number) {
        super(colour);
        this.secondaryColour = secondaryColour;
        this.number = number;
    }

    public Colour getSecondaryColour() {
        return secondaryColour;
    }

}
