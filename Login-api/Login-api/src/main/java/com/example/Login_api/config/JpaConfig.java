package com.example.Login_api.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.example.Login_api")
@EntityScan(basePackages = "com.example.Login_api")
public class JpaConfig {
}