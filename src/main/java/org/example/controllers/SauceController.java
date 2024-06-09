package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.SauceDto;
import org.example.services.SauceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authorized")
public class SauceController {

    private final SauceService sauceService;

    @PostMapping("/add-sauce")
    public SauceDto addSauce(@RequestBody SauceDto sauceDto) throws Exception{

        return sauceService.addSauce(sauceDto);
    }
}
