package org.example.controllers;

import lombok.RequiredArgsConstructor;
import org.example.dto.SupplierDto;
import org.example.dto.SupplyItemDto;
import org.example.services.SupplyService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/supply")
public class SupplyController {

    private final SupplyService supplyService;

    @PostMapping("/create")
    public void takeSupply(@RequestBody SupplyItemDto supplyItemDto){

        supplyService.takeSupply(supplyItemDto);
    }

}
