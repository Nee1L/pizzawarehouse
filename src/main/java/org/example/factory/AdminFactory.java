package org.example.factory;

import org.example.dto.AdminDto;
import org.example.entities.Admin;
import org.springframework.stereotype.Component;

@Component
public class AdminFactory {

    public AdminDto toDto(Admin admin) {
        return AdminDto.builder().id(admin.getId()).
                username(admin.getUsername()).password(admin.getPassword()).build();
    }

    public Admin fromDto(AdminDto adminDto) {
        return Admin.builder().id(adminDto.getId()).
                username(adminDto.getUsername()).password(adminDto.getPassword()).build();
    }


}
