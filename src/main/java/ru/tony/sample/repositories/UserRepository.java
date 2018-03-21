package ru.tony.sample.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.tony.sample.entity.User;

/**
 * sbt-dranitsyn-as
 * 21.03.2018
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
