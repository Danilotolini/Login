package com.example.Login_api.Login;

public class LoginResponseDTO(String email, nome, senha) {
    public LoginResponseDTO(Login login){
        this(Login.getEmail(), Login.getNome(), Login.getSenha());
    }
}
