package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.MeatDto;
import org.example.services.MeatService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authorized")
public class MeatController {

    private final MeatService meatService;

    @PostMapping("/add-meat")
    public MeatDto addMeat(@RequestBody MeatDto meatDto) throws Exception{

        return meatService.addMeat(meatDto);
    }

}
