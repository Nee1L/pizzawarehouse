package com.srp.user.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.srp.common.dto.ProjectAttachmentDTO;
import com.srp.common.dto.ProjectDTO;
import com.srp.common.dto.TagDTO;
import com.srp.user.config.BaseTest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ProjectControllerTest extends BaseTest {

    @Test
    @DisplayName("Create project")
    public void createProjectTest() throws Exception {
        ProjectDTO projectDTO = createProjectDTO();
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        String json = objectMapper.writeValueAsString(projectDTO);
        ResultActions resultActions = mockMvc.perform(post("/api/project/create").contentType(MediaType.APPLICATION_JSON).content(json)).andExpect(status().isOk());
        assertFalse(resultActions.andReturn().getResponse().getContentAsString().isEmpty());
    }

    private ProjectDTO createProjectDTO() {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(10);
        projectDTO.setLikes(5);
        List<ProjectAttachmentDTO> projectAttachments = new ArrayList<>();
        projectDTO.setProjectAttachments(projectAttachments);
        List<TagDTO> tags = new ArrayList<>();
        TagDTO tagDTO = new TagDTO();
        tagDTO.setId(1L);
        tagDTO.setName("SlavaUkraine");
        tags.add(tagDTO);
        projectDTO.setTags(tags);
        return projectDTO;
    }
}
