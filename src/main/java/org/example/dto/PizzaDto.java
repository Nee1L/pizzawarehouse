package org.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class PizzaDto {

    private Long id;

    private Product product;

    private String name;

    private String description;

}
