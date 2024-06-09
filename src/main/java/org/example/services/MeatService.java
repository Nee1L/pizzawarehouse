package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.dto.MeatDto;
import org.example.entities.Meat;
import org.example.factory.MeatFactory;
import org.example.repositories.MeatRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MeatService {

    private final MeatRepository meatRepository;

    private final MeatFactory meatFactory;

    public MeatDto addMeat(MeatDto meatDto){

        Meat meat = meatRepository.save(meatFactory.fromDto(meatDto));
        return meatFactory.toDto(meat);
    }

}
