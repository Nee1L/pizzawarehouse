package com.srp.user.controllers;

import com.srp.common.dto.ProjectDTO;
import com.srp.user.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class GraphQLController {

    private final ProjectService projectService;

    @QueryMapping
    public String healthCheck() {
        return "GraphQL schema is working!";
    }

    @MutationMapping
    public ProjectDTO updateProjectInfo(
            @Argument Long id,
            @Argument String title,
            @Argument String description
    ) {
        ProjectDTO clientDTO = new ProjectDTO();
        clientDTO.setId(id);
        clientDTO.setTitle(title);
        clientDTO.setDescription(description);
        return projectService.update(clientDTO);
    }
}
