package com.srp.user.converters;

import com.srp.common.dto.EducationDTO;
import com.srp.user.entities.Education;
import org.springframework.stereotype.Component;

@Component
public class EducationConverter {

    public EducationDTO toDTO(Education education) {
        EducationDTO result = new EducationDTO();
        result.setId(education.getId());
        result.setTitle(education.getTitle());
        result.setEducationType(education.getEducationType());
        result.setReviews(education.getReviews());
        result.setPublishDate(education.getPublishDate());
        result.setImg(education.getImg());
        return result;
    }

    public Education fromDTO(EducationDTO educationDTO) {
        Education result = new Education();
        result.setId(educationDTO.getId());
        result.setTitle(educationDTO.getTitle());
        result.setEducationType(educationDTO.getEducationType());
        result.setReviews(educationDTO.getReviews());
        result.setPublishDate(educationDTO.getPublishDate());
        result.setImg(educationDTO.getImg());
        return result;
    }

}
