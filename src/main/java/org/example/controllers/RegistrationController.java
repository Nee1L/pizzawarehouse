package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.AdminDto;
import org.example.dto.SupplierDto;
import org.example.services.RegistrationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authorization")
public class RegistrationController {

    private final RegistrationService registrationService;


    @PostMapping("/sign-up")
    public AdminDto signUp(@RequestBody AdminDto adminDto) throws Exception {

      return registrationService.signup(adminDto);
    }

    @PostMapping("/add-supplier")
    public SupplierDto registerSupplier(@RequestBody SupplierDto supplierDto) throws Exception {

        return registrationService.registerSupplier(supplierDto);
    }


}
