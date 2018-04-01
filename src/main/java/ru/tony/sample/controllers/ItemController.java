package ru.tony.sample.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.tony.sample.entity.Item;
import ru.tony.sample.repositories.ItemRepository;

import java.util.List;

@PreAuthorize(value = "hasAnyRole('ROLE_STAFF', 'ROLE_ADMIN')")
@RestController
@RequestMapping("api")
public class ItemController {

    private ItemRepository repository;

    public ItemController(ItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/items")
    public List<Item> getUserList() {
        return (List<Item>) repository.findAll();
    }
}
