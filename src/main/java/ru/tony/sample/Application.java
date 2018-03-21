package ru.tony.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.tony.sample.entity.User;
import ru.tony.sample.repositories.UserRepository;

import javax.annotation.PostConstruct;

/**
 * sbt-dranitsyn-as
 * 21.03.2018
 */
@SpringBootApplication
public class Application {

    @Autowired
    UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @PostConstruct
    public void initData() {
        userRepository.save(new User("admin", "admin", "admin description"));
        userRepository.save(new User("staff", "staff", "staff description"));
    }
}
