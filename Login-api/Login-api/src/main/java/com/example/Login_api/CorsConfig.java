package com.example.Login_api;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // Permite solicitações apenas de http://localhost:5173
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite os métodos HTTP especificados
                .allowedHeaders("*") // Permite todos os cabeçalhos HTTP
                .allowCredentials(true) // Permite o envio de credenciais (como cookies)
                .maxAge(3600); // Define o tempo de vida do cache de preflight CORS em segundos
    }
}