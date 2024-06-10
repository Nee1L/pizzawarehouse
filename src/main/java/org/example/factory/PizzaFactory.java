package org.example.factory;

import lombok.RequiredArgsConstructor;
import org.example.dto.MeatDto;
import org.example.dto.PizzaDto;
import org.example.dto.Product;
import org.example.dto.SauceDto;
import org.example.entities.Meat;
import org.example.entities.Pizza;
import org.example.repositories.MeatRepository;
import org.example.repositories.SauceRepository;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PizzaFactory {

    private final MeatRepository meatRepository;

    private final SauceRepository sauceRepository;

    private final MeatFactory meatFactory;

    private final SauceFactory sauceFactory;


    public PizzaDto toDto(Pizza pizza){

        if(pizza.getProductType().equals("meat")) {

            Product product = (Product) meatFactory.toDto(meatRepository.getReferenceById(pizza.getProductId()));
            return PizzaDto.builder().id(pizza.getId()).product(product).description(pizza.getDescription()).build();
        }
        else if (pizza.getProductType().equals("sauce")){

            Product product = (Product) sauceFactory.toDto(sauceRepository.getReferenceById(pizza.getProductId()));
            return PizzaDto.builder().id(pizza.getId()).product(product).description(pizza.getDescription()).build();
        }
        return null;
    }

    public Pizza fromDto(PizzaDto pizzaDto){

        if(pizzaDto.getProduct() instanceof MeatDto){

            return Pizza.builder().id(pizzaDto.getId()).name(pizzaDto.getName()).
                    description(pizzaDto.getDescription()).productType(((MeatDto) pizzaDto.getProduct()).getType()).
                    productId(((MeatDto) pizzaDto.getProduct()).getId()).build();
        }
        else if(pizzaDto.getProduct() instanceof SauceDto){

            return Pizza.builder().id(pizzaDto.getId()).name(pizzaDto.getName()).
                    description(pizzaDto.getDescription()).productType(((SauceDto) pizzaDto.getProduct()).getDescription()).
                    productId(((SauceDto) pizzaDto.getProduct()).getId()).build();
        }
        return null;
    }

}
