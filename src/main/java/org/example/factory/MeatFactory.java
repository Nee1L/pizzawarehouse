package org.example.factory;

import org.example.dto.MeatDto;
import org.example.dto.Price;
import org.example.dto.ProductInfoDto;
import org.example.entities.Meat;
import org.springframework.stereotype.Component;

@Component
public class MeatFactory {

    public MeatDto toDto(Meat meat){
        Price price = new Price();

        price.setId(null);

        price.setValue(meat.getCost());

        price.setCurrency("$");

        ProductInfoDto productInfoDto = new ProductInfoDto();

        productInfoDto.setMeasure(meat.getMeasure());

        productInfoDto.setName(meat.getName());

        productInfoDto.setQuantity(meat.getQuantity());

        return MeatDto.builder().id(meat.getId()).
                type(meat.getType()).price(price).productInfoDto(productInfoDto).build();

    }

    public Meat fromDto(MeatDto meatDto){

        return Meat.builder().id(meatDto.getId()).
                name(meatDto.getProductInfoDto().getName()).type(meatDto.getType()).
                cost(meatDto.getPrice().getValue()).quantity(meatDto.getProductInfoDto().getQuantity()).measure(meatDto.getProductInfoDto().getMeasure()).build();
    }

}
