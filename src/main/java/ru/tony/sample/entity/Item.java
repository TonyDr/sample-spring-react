package ru.tony.sample.entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@RequiredArgsConstructor
public class Item implements Serializable {

    @Id @GeneratedValue
    private Long id;

    private final String name;
    private final String description;

    Item() {
        this.name = null;
        this.description = null;
    }
}
