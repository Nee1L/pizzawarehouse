package com.srp.user.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.srp.common.dto.auth0.TokenResponse;
import com.srp.user.entities.ManagementTokenRequest;
import com.srp.user.entities.User;
import com.srp.user.repositories.Auth0Repository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final Auth0Repository auth0Repository;

    private final ManagementTokenRequest managementTokenRequest;

    @Operation(description = "Test")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success|OK"),
    })
    @GetMapping("/test")
    public void test() throws JsonProcessingException {
        TokenResponse tokenResponse = new ObjectMapper().readValue(auth0Repository.getToken(managementTokenRequest), TokenResponse.class);
        User user = new ObjectMapper().readValue(auth0Repository.getUserById("Bearer " + tokenResponse.getAccessToken(), "auth0|66f3d63a6765c1bd5f550464"), User.class);
        String jsonBody = "{ \"user_metadata\" : { \"addresses\": {\"work_address\": \"100 Industrial Way\"} }}";
        String result = auth0Repository.updateUser("Bearer " + tokenResponse.getAccessToken(), "auth0|66f3d63a6765c1bd5f550464", jsonBody);
//        String user2 = SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
