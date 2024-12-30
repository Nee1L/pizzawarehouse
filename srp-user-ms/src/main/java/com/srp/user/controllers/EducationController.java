package com.srp.user.controllers;

import com.srp.common.dto.EducationDTO;
import com.srp.user.services.EducationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/education")
public class EducationController {

    private final EducationService educationService;

    //TODO For test purposes only. When admin ms will introduce, this method will be replaced to this ms
    @Operation(description = "Creating education")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @PostMapping("/create")
    public EducationDTO create(@RequestBody EducationDTO educationDTO) {
        return educationService.create(educationDTO);
    }

    @Operation(description = "Get education by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/get/{id}")
    public EducationDTO getById(@PathVariable Long id) {
        return educationService.getById(id);
    }

    @Operation(description = "Find all existed educations")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/find-all")
    public List<EducationDTO> findAll() {
        return educationService.findAll();
    }
}
