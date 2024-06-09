package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.dto.AdminDto;
import org.example.entities.Admin;
import org.example.factory.AdminFactory;
import org.example.repositories.AdminRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    private final AdminFactory adminFactory;

    public AdminDto signup(AdminDto adminDto) {
        Admin admin = adminRepository.save(adminFactory.fromDto(adminDto));
        return adminFactory.toDto(admin);
    }
}