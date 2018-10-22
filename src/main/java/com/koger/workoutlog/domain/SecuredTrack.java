package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeName("secured")
public class SecuredTrack extends Track {
    private final Difficulty difficulty;

    @JsonCreator
    public SecuredTrack(@JsonProperty("colour") Colour colour, @JsonProperty("difficulty") Difficulty difficulty) {
        super(colour);
        this.difficulty = difficulty;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

}
