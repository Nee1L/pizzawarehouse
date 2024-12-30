package com.srp.user.config;

import feign.okhttp.OkHttpClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class FeignConfig {
    @Bean
    public OkHttpClient client() {
        return new OkHttpClient();
    }
}