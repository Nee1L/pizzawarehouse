package com.srp.user.controllers;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.srp.common.dto.ProjectAttachmentDTO;
import com.srp.common.dto.ProjectDTO;
import com.srp.common.dto.TagDTO;
import com.srp.user.config.BaseTest;
import com.srp.user.converters.ProjectConverter;
import com.srp.user.repositories.ProjectRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class PublicControllerTest extends BaseTest {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectConverter projectConverter;

    @BeforeEach
    public void setUp() {
        projectRepository.save(projectConverter.fromDTO(createProjectDTO()));
    }

    @Test
    @DisplayName("Get project by id")
    public void getProjectByIdTest() throws Exception {
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/get/1").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        assertFalse(resultActions.andReturn().getResponse().getContentAsString().isEmpty());
    }

    @Test
    @DisplayName("Find all existed projects")
    public void findAllProjectsTest() throws Exception {
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/find-all").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        assertFalse(resultActions.andReturn().getResponse().getContentAsString().isEmpty());
    }

    @Test
    @DisplayName("Find sorted projects by date asc")
    public void findSortedProjectsByDateAscTest() throws Exception {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title2");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(10);
        projectDTO.setLikes(5);
        projectRepository.save(projectConverter.fromDTO(projectDTO));
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/sorting/by-date/asc").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        List<ProjectDTO> projects = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), new TypeReference<>() {
        });
        assertEquals("title", projects.getFirst().getTitle());
    }

    @Test
    @DisplayName("Find sorted projects by date desc")
    public void findSortedProjectsByDateDescTest() throws Exception {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title2");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(10);
        projectDTO.setLikes(5);
        projectRepository.save(projectConverter.fromDTO(projectDTO));
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/sorting/by-date/desc").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        List<ProjectDTO> projects = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), new TypeReference<>() {
        });
        assertEquals("description", projects.getFirst().getDescription());
    }

    @Test
    @DisplayName("Find sorted projects by number of views")
    public void findSortedProjectsByNumberOfViewsTest() throws Exception {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title3");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(20);
        projectDTO.setLikes(10);
        projectRepository.save(projectConverter.fromDTO(projectDTO));
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/sorting/by-views").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        List<ProjectDTO> projects = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), new TypeReference<>() {
        });
        assertEquals("title3", projects.getFirst().getTitle());
    }

    @Test
    @DisplayName("Find sorted projects by number of likes")
    public void findSortedProjectsByNumberOfLikesTest() throws Exception {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title4");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(10);
        projectDTO.setLikes(30);
        projectRepository.save(projectConverter.fromDTO(projectDTO));
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/sorting/by-likes").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        List<ProjectDTO> projects = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), new TypeReference<>() {
        });
        assertEquals("title4", projects.getFirst().getTitle());
    }

    @Test
    @DisplayName("Find filtered projects by tag")
    public void filterProjectsByTagTest() throws Exception {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setTitle("title5");
        projectDTO.setDescription("description");
        projectDTO.setCreateDate(ZonedDateTime.now());
        projectDTO.setViews(10);
        projectDTO.setLikes(10);
        List<TagDTO> tags = new ArrayList<>();
        TagDTO tagDTO = new TagDTO();
        tagDTO.setName("PeremogaBude");
        tags.add(tagDTO);
        projectDTO.setTags(tags);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        mockMvc.perform(post("/api/project/create").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(projectDTO))).andExpect(status().isOk());
        ResultActions resultActions = mockMvc.perform(get("/api/public/project/filter/PeremogaBude").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
        objectMapper.findAndRegisterModules();
        List<ProjectDTO> projects = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), new TypeReference<>() {
        });
        assertEquals("title5", projects.getFirst().getTitle());
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
