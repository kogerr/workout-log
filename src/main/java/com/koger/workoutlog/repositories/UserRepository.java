package com.koger.workoutlog.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.koger.workoutlog.domain.User;

public interface UserRepository extends MongoRepository<User, String> {

    User getByEmailAddress(String emailAddress);

}
