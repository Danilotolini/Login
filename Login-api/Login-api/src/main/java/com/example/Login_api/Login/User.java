package com.example.Login_api.Login;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "users")
@Entity(name = "User")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "email")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String nome;
    private String senha;

    public User(LoginRequestDTO data) {
        this.email = data.email();
        this.nome = data.nome();
        this.senha = data.senha();
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
