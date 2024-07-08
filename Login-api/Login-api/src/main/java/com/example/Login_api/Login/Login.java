package com.example.Login_api.Login;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "login")
@Entity(name = "Login")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "email")
public class Login {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String email,
    nome,
    senha;

    public Login(LoginRequestDTO data){
        this.email = data.email();
        this.nome = data.nome();
        this.senha = data.senha();
    }
}
