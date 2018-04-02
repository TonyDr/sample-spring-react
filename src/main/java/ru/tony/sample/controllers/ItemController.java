package ru.tony.sample.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tony.sample.controllers.messages.ItemRequest;
import ru.tony.sample.entity.Item;
import ru.tony.sample.repositories.ItemRepository;

import javax.websocket.server.PathParam;
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
    public List<Item> getItemList() {
        return (List<Item>) repository.findAll();
    }

    @PostMapping("/items")
    public void createItem(@RequestBody ItemRequest request) {

        Item item = new Item();
        item.setName(request.getName());
        item.setDescription(request.getDescription());
        repository.save(item);
    }

    @PutMapping("/items/{itemId}")
    public void updateItem(@PathParam("itemId") Long itemId, @RequestBody ItemRequest request) {

        Item item = repository.findOne(itemId);
        item.setName(request.getName());
        item.setDescription(request.getDescription());

        repository.save(item);
    }
}
