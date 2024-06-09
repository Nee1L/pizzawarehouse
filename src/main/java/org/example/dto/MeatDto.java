package org.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MeatDto implements Product {

    private Long id;

    private Price price;

    private String type;

    private ProductInfoDto productInfoDto;

    @Override
    public String getDescription() {
        return null;
    }
}
