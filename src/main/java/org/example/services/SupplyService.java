package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.Main;
import org.example.dto.*;
import org.example.entities.Meat;
import org.example.entities.Sauce;
import org.example.entities.Supplier;
import org.example.factory.SupplierFactory;
import org.example.repositories.MeatRepository;
import org.example.repositories.SauceRepository;
import org.example.repositories.SupplierRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupplyService {

    private final MeatRepository meatRepository;

    private final SauceRepository sauceRepository;
    public void takeSupply(SupplyItemDto supplyItemDto){

        if (supplyItemDto.getProduct() instanceof MeatDto) {
            Long id = ((MeatDto) supplyItemDto.getProduct()).getId();
            Meat meat = meatRepository.getReferenceById(id);
            meat.setQuantity(meat.getQuantity() + supplyItemDto.getQuantity());
            meatRepository.save(meat);

        }
        else if (supplyItemDto.getProduct() instanceof SauceDto) {
            Sauce sauce = sauceRepository.getReferenceById(((SauceDto) supplyItemDto.getProduct()).getId());
            sauce.setQuantity(sauce.getQuantity()+ supplyItemDto.getQuantity());
            sauceRepository.save(sauce);

        }
    }


}
