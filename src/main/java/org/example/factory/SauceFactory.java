package org.example.factory;

import org.example.dto.MeatDto;
import org.example.dto.Price;
import org.example.dto.ProductInfoDto;
import org.example.dto.SauceDto;
import org.example.entities.Meat;
import org.example.entities.Sauce;
import org.springframework.stereotype.Component;

@Component
public class SauceFactory {

    public SauceDto toDto(Sauce sauce){
        Price price = new Price();

        price.setId(null);

        price.setValue(sauce.getCost());

        price.setCurrency("$");

        ProductInfoDto productInfoDto = new ProductInfoDto();

        productInfoDto.setMeasure(sauce.getMeasure());

        productInfoDto.setName(sauce.getName());

        productInfoDto.setQuantity(sauce.getQuantity());

        return SauceDto.builder().id(sauce.getId()).
                price(price).productInfoDto(productInfoDto).build();

    }

    public Sauce fromDto(SauceDto sauceDto){

        return Sauce.builder().id(sauceDto.getId()).
                name(sauceDto.getProductInfoDto().getName()).
                cost(sauceDto.getPrice().getValue()).quantity(sauceDto.getProductInfoDto().getQuantity()).measure(sauceDto.getProductInfoDto().getMeasure()).build();
    }
}
