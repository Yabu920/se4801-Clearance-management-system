package com.se4801.clearance.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI studentClearanceOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Student Clearance Management System API")
                        .version("v1")
                        .description("API documentation for the student clearance workflow"));
    }
}
