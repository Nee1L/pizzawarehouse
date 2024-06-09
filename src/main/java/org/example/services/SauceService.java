package org.example.services;

import lombok.RequiredArgsConstructor;
import org.example.dto.SauceDto;
import org.example.entities.Sauce;
import org.example.factory.SauceFactory;
import org.example.repositories.SauceRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SauceService {

    private final SauceRepository sauceRepository;

    private final SauceFactory sauceFactory;

    public SauceDto addSauce(SauceDto sauceDto){

        Sauce sauce = sauceRepository.save(sauceFactory.fromDto(sauceDto));
        return sauceFactory.toDto(sauce);
    }
}
