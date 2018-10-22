package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeName("boulder")
public class BoulderTrack extends Track {
    private final Colour secondaryColour;

    @JsonCreator
    public BoulderTrack(@JsonProperty("colour") Colour colour, @JsonProperty("secondaryColour") Colour secondaryColour) {
        super(colour);
        this.secondaryColour = secondaryColour;
    }

    public Colour getSecondaryColour() {
        return secondaryColour;
    }

}
