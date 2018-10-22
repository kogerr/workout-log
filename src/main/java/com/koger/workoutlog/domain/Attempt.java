package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Attempt {
    private final Track track;
    private final boolean success;
    private final String note;

    public Attempt(@JsonProperty("track") Track track, @JsonProperty("success") boolean success, @JsonProperty("note") String note) {
        this.track = track;
        this.success = success;
        this.note = note;
    }

    public Track getTrack() {
        return track;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getNote() {
        return note;
    }

}
