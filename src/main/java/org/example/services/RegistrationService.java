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
public class RegistrationService {

    private final AdminRepository adminRepository;

    private final AdminFactory adminFactory;

    private final SupplierRepository supplierRepository;

    private final SupplierFactory supplierFactory;


    public AdminDto signup(AdminDto adminDto) {
        Admin admin = adminRepository.save(adminFactory.fromDto(adminDto));
        return adminFactory.toDto(admin);
    }

    public SupplierDto registerSupplier(SupplierDto supplierDto) {
        Supplier supplier = supplierRepository.save(supplierFactory.fromDto(supplierDto));
        return supplierFactory.toDto(supplier);
    }
}