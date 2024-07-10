package com.example.Login_api.Login;

public record LoginResponseDTO(String email, String nome, String senha) {
    public LoginResponseDTO(User user) {
        this(user.getEmail(), user.getNome(), user.getSenha());
    } }
