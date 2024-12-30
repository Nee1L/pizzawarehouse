package com.srp.user.controllers;


import com.srp.common.dto.EducationDTO;
import com.srp.common.enums.EducationType;
import com.srp.user.config.BaseTest;
import com.srp.user.converters.EducationConverter;
import com.srp.user.repositories.EducationRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class EducationControllerTest extends BaseTest {

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    private EducationConverter educationConverter;

    @Test
    @DisplayName("Get education by id")
    public void getEducationByIdTest() throws Exception {
        EducationDTO educationDTO = createEducationDTO(1L);

        educationRepository.save(educationConverter.fromDTO(educationDTO));
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/education/get/1").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
        assertFalse(resultActions.andReturn().getResponse().getContentAsString().isEmpty());
    }

    @Test
    @DisplayName("Find all existed education")
    public void findAllTest() throws Exception {
        EducationDTO educationDTO = createEducationDTO(2L);

        educationRepository.save(educationConverter.fromDTO(educationDTO));
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/education/find-all").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
        assertFalse(resultActions.andReturn().getResponse().getContentAsString().isEmpty());
    }

    private EducationDTO createEducationDTO(Long id) {
        EducationDTO educationDTO = new EducationDTO();
        educationDTO.setId(id);
        educationDTO.setTitle("Education title");
        educationDTO.setEducationType(EducationType.ARTICLE);
        educationDTO.setReviews(5);
        educationDTO.setPublishDate(new Date());
        return educationDTO;
    }
}
