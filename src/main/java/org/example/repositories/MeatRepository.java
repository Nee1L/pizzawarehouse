package org.example.repositories;

import org.example.entities.Meat;
import org.example.entities.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeatRepository extends JpaRepository<Meat,Long> {

}
