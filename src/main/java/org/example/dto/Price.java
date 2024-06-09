package org.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Price {

    private Long id;

    private Double value;

    private String currency;

}
