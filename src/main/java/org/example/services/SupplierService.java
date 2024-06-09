package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.dto.AdminDto;
import org.example.dto.SupplierDto;
import org.example.entities.Admin;
import org.example.entities.Supplier;
import org.example.factory.AdminFactory;
import org.example.factory.SupplierFactory;
import org.example.repositories.AdminRepository;
import org.example.repositories.SupplierRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    private final SupplierFactory supplierFactory;

    public SupplierDto addSupplier(SupplierDto supplierDto) {
        Supplier supplier = supplierRepository.save(supplierFactory.fromDto(supplierDto));
        return supplierFactory.toDto(supplier);
    }


}
