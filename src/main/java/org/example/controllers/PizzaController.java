package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.PizzaDto;
import org.example.repositories.PizzaRepository;
import org.example.services.PizzaService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pizza")
public class PizzaController {

    private final PizzaService pizzaService;

    private final PizzaRepository pizzaRepository;

    @PostMapping("/create")
    public PizzaDto createPizza(@RequestBody PizzaDto pizzaDto) throws Exception{

        return pizzaService.createPizza(pizzaDto);
    }


}
