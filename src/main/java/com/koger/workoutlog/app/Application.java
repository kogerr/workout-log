package com.koger.workoutlog.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * The main application class that starts the Spring Boot app.
 * @author Gergely_Kovacs3
 */
@SpringBootApplication
@ComponentScan(basePackages = "com.koger.workoutlog")
@EnableMongoRepositories(basePackages = "com.koger.workoutlog.repositories")
public class Application {

    /**
     * Main method of the main application class.
     * @param args input arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
