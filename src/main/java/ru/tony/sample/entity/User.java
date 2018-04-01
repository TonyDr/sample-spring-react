package ru.tony.sample.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@RequiredArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private final String name;

    @JsonIgnore
    private final String password;

    private final String description;
    private final String[] roles;

    User() {
        this.name = null;
        this.password = null;
        this.description = null;
        roles = new String[0];
    }

}
