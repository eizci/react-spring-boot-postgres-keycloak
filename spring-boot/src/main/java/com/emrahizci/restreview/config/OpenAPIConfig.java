package com.emrahizci.restreview.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI(@Value("${project.version}") String appVersion) {
        Server server = new Server();
        server.setUrl("/");
		return new OpenAPI()
        		.servers(Arrays.asList(server))
                .info(new Info()
                        .title("RestReview API")
                        .description("REST API documentation for Restaurant Review App")
                        .version(appVersion)
                        .license(new License().name("Apache 2.0").url("http://springdoc.org"))
                );
    }
}
