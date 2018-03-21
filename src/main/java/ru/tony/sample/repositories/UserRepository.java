package ru.tony.sample.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.tony.sample.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByName(String username);
}
