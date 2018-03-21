package ru.tony.sample.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * sbt-dranitsyn-as
 * 21.03.2018
 */
@Entity
@Data
@RequiredArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private final String name;
    private final String password;
    private final String description;

    User() {
        this.name = null;
        this.password = null;
        this.description = null;
    }
}
