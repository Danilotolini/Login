package com.example.Login_api.Login;

public class LoginResponseDTO {
    private String email;
    private String nome;
    private String senha;

    public LoginResponseDTO(String email, String nome, String senha) {
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }

    public LoginResponseDTO(User user) {
        this(user.getEmail(), user.getNome(), user.getSenha());
    }

    // getters e setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
