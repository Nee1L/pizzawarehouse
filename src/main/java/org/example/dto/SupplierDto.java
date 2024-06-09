package org.example.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SupplierDto {

    private Long id;

    private String name;

    private String phoneNumber;

}
