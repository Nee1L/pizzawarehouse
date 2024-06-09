package org.example.factory;

import org.example.dto.SupplierDto;
import org.example.entities.Supplier;
import org.springframework.stereotype.Component;

@Component
public class SupplierFactory {

    public SupplierDto toDto(Supplier supplier){

        return SupplierDto.builder().id(supplier.getId()).name(supplier.getName()).phoneNumber(supplier.getPhoneNumber()).build();
    }

    public Supplier fromDto(SupplierDto supplierDto){

        return Supplier.builder().id(supplierDto.getId()).name(supplierDto.getName()).phoneNumber(supplierDto.getPhoneNumber()).build();
    }

}
