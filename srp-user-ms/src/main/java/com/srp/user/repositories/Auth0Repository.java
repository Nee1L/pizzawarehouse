package com.srp.user.repositories;

import com.srp.user.entities.ManagementTokenRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@Repository
@FeignClient(url = "${management-api-url}", name = "managementApi")
public interface Auth0Repository {
    @PostMapping("/oauth/token")
    String getToken(@RequestBody ManagementTokenRequest managementTokenRequest);

    @GetMapping("/api/v2/users/{id}")
    String getUserById(@RequestHeader("Authorization") String accessToken, @PathVariable(name = "id") String id);

    @PatchMapping(path = "api/v2/users/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    String updateUser(@RequestHeader("Authorization") String accessToken, @PathVariable("id") String id, @RequestBody String requestBody);
}
