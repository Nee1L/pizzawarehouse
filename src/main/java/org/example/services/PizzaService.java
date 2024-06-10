package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.dto.PizzaDto;
import org.example.entities.Pizza;
import org.example.factory.PizzaFactory;
import org.example.repositories.PizzaRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PizzaService {

    private final PizzaRepository pizzaRepository;

    private final PizzaFactory pizzaFactory;

    public PizzaDto createPizza(PizzaDto pizzaDto){
        Pizza pizza = pizzaRepository.save(pizzaFactory.fromDto(pizzaDto));
        return pizzaFactory.toDto(pizza);
    }

}
