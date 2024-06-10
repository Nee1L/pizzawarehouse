package org.example.repositories;

import org.example.entities.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PizzaRepository extends JpaRepository<Pizza,Long> {

}
