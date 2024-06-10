package org.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.example.entities.Sauce;

import java.util.Date;

@Getter
@Setter
@Builder
public class SupplyItemDto {

    private Long id;

    private Product product;

    private SupplierDto supplierDto;

    private Integer quantity;

    private Date date;


}
