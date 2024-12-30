package com.srp.user.controllers;

import com.srp.common.dto.ProjectDTO;
import com.srp.user.services.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/public")
public class PublicController {

    private final ProjectService projectService;

    @MessageMapping("/sendMessage")
    @SendTo("/topic/someChannel")
    public String processMessage(String message) {
        return "Server received: " + message;
    }

    @Operation(description = "Creating  project")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @PostMapping("/create")
    public ProjectDTO create(@RequestBody ProjectDTO projectDTO) {
        return projectService.create(projectDTO);
    }

    @Operation(description = "Delete project")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @DeleteMapping("/delete/{id}")
    public void create(@PathVariable("id") Long id) {
        projectService.delete(id);
    }

    @Operation(description = "Get project by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/get/{id}")
    public ProjectDTO getById(@PathVariable(name = "id") Long id) {
        return projectService.getById(id);
    }

    @Operation(description = "Sort projects by date ascending")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/find-all")
    public List<ProjectDTO> findAll(@PageableDefault(size = 16) Pageable pageable) {
        return projectService.findAll(pageable);
    }

    @Operation(description = "Sort projects by date ascending")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/sorting/by-date/asc")
    public List<ProjectDTO> sortByDateAsc(@PageableDefault(size = 16) @SortDefault.SortDefaults({
            @SortDefault(sort = "createDate", direction = Sort.Direction.ASC)
    }) Pageable pageable) {
        return projectService.findAll(pageable);
    }

    @Operation(description = "Sort projects by date descending")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/sorting/by-date/desc")
    public List<ProjectDTO> sortByDateDesc(@PageableDefault(size = 16) @SortDefault.SortDefaults({
            @SortDefault(sort = "createDate", direction = Sort.Direction.DESC)
    }) Pageable pageable) {
        return projectService.findAll(pageable);
    }

    @Operation(description = "Sort projects by number of views")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/sorting/by-views")
    public List<ProjectDTO> sortByViews(@PageableDefault(size = 16) @SortDefault.SortDefaults({
            @SortDefault(sort = "views", direction = Sort.Direction.DESC)
    }) Pageable pageable) {
        return projectService.findAll(pageable);
    }

    @Operation(description = "Sort projects by number of likes")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/sorting/by-likes")
    public List<ProjectDTO> sortByLikes(@PageableDefault(size = 16) @SortDefault.SortDefaults({
            @SortDefault(sort = "likes", direction = Sort.Direction.DESC)
    }) Pageable pageable) {
        return projectService.findAll(pageable);
    }

    @Operation(description = "Sort projects by tag")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/project/filter/{tag}")
    public List<ProjectDTO> sortByTag(@PageableDefault(size = 16) Pageable pageable, @PathVariable(name = "tag") String tag) {
        return projectService.filterByTag(pageable, tag);
    }
}
