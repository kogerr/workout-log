package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME)
@JsonSubTypes({
    @JsonSubTypes.Type(value = SecuredTrack.class),
    @JsonSubTypes.Type(value = BoulderTrack.class)
})
public abstract class Track {
    private final Colour colour;

    Track(Colour colour) {
        this.colour = colour;
    }

    public Colour getColour() {
        return colour;
    }

}
