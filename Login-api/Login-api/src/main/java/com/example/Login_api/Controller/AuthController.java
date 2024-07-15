package com.example.Login_api.Controller;

import com.example.Login_api.Login.LoginRequestDTO;
import com.example.Login_api.Login.User;
import com.example.Login_api.Login.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDTO data) {
        // Lógica de autenticação aqui
        return "User logged in successfully";
    }
}
