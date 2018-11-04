package com.koger.workoutlog.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Arrays;
import java.util.stream.Stream;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Grade {

    F4a("4a","IV"),
    F4b("4b","IV+"),
    F4c("4c","V"),
    F5a("5a","V+"),
    F5b("5b","VI-"),
    F5c("5c","VI"),
    F6a("6a","VI+"),
    F6aP("6a+","VII-"),
    F6b("6b","VII"),
    F6bP("6b+","VII+"),
    F6c("6c","VIII-"),
    F6cP("6c+","VIII"),
    F7a("7a","VIII+"),
    F7aP("7a+","IX-"),
    F7b("7b","IX-"),
    F7bP("7b+","IX"),
    F7c("7c","IX"),
    F7cP("7c+","IX+"),
    F8a("8a","IX+"),
    F8aP("8a+","X-"),
    F8b("8b","X"),
    F8bP("8b+","X+"),
    F8c("8c","X+"),
    F8cP("8c+","XI-");
    
    private final String french;
    private final String uiaa;

    Grade(String french, String uiaa) {
        this.french = french;
        this.uiaa = uiaa;
    }

    @JsonCreator
    public static Grade findByKey(String frenchGrade) {
        Stream<Grade> values = Arrays.stream(Grade.values());
        return values.filter(v -> v.french.equals(frenchGrade)).findFirst().orElse(null);
    }

    public String getFrench() {
        return french;
    }

    public String getUiaa() {
        return uiaa;
    }

}
