package org.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SauceDto implements Product {

    private Long id;

    private Price price;

    private ProductInfoDto productInfoDto;

    @Override
    public String getDescription() {
        return null;
    }
}
