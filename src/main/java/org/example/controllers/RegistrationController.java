package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.AdminDto;
import org.example.services.AdminService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authorization")
public class RegistrationController {

    private final AdminService adminService;


    @PostMapping("/sign-up")
    public AdminDto signUp(@RequestBody AdminDto adminDto) throws Exception {

      return adminService.signup(adminDto);
    }



}
