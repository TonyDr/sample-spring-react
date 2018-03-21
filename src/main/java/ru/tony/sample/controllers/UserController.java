package ru.tony.sample.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.tony.sample.entity.User;
import ru.tony.sample.repositories.UserRepository;

import java.util.List;

@RestController
@RequestMapping("api")
public class UserController {

    UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }


    @GetMapping("/users")
    public List<User> getUserList() {
        return (List<User>) repository.findAll();
    }
}
