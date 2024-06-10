package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.MeatDto;
import org.example.dto.SauceDto;
import org.example.services.MeatService;
import org.example.services.SauceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/product")
public class ProductController {

    private final MeatService meatService;

    private final SauceService sauceService;

    @PostMapping("/create/meat")
    public MeatDto addMeat(@RequestBody MeatDto meatDto) throws Exception{

        return meatService.addMeat(meatDto);
    }

    @PostMapping("/create/sauce")
    public SauceDto addSauce(@RequestBody SauceDto sauceDto) throws Exception{

        return sauceService.addSauce(sauceDto);
    }

}
