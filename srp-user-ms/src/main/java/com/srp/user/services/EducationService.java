package com.srp.user.services;

import com.srp.common.dto.EducationDTO;
import com.srp.user.converters.EducationConverter;
import com.srp.user.entities.Education;
import com.srp.user.repositories.EducationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationService {

    private final EducationRepository educationRepository;

    private final EducationConverter educationConverter;

    public EducationDTO create(EducationDTO educationDTO) {
        Education savedEducation = educationRepository.save(educationConverter.fromDTO(educationDTO));
        return educationConverter.toDTO(savedEducation);
    }

    public EducationDTO getById(Long id) {
        Education education = educationRepository.getReferenceById(id);
        return educationConverter.toDTO(education);
    }

    public List<EducationDTO> findAll() {
        return educationRepository.findAll().stream().map(educationConverter::toDTO).toList();
    }
}
