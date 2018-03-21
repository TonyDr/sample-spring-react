package ru.tony.sample.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.tony.sample.entity.Item;

public interface ItemRepository extends CrudRepository<Item, Long> {
}
