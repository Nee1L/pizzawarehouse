package com.srp.user.entities;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@ConfigurationProperties(prefix = "management-api-token-request")
public class ManagementTokenRequest {

    private String clientId;

    private String clientSecret;

    private String audience;

    private String grantType;
}
