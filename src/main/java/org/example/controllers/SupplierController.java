package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.SupplierDto;
import org.example.services.SupplierService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authorized")
public class SupplierController {

    private final SupplierService supplierService;

    @PostMapping("/add-supplier")
    public SupplierDto addSupplier(@RequestBody SupplierDto supplierDto) throws Exception {

        return supplierService.addSupplier(supplierDto);
    }

}
