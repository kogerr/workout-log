package com.koger.workoutlog.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.koger.workoutlog.domain.Workout;

public interface WorkoutRepository extends MongoRepository<Workout, String> {

}
