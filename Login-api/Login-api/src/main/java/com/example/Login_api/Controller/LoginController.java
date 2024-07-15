package com.example.Login_api.Controller;

import com.example.Login_api.Login.LoginRequestDTO;
import com.example.Login_api.Login.User;
import com.example.Login_api.Login.UserRepository;
import com.example.Login_api.Login.LoginResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class LoginController {

    private final UserRepository userRepository;

    @Autowired
    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String register(@RequestBody LoginRequestDTO data) {
        User user = new User(data.getEmail(), data.getNome(), data.getSenha());
        userRepository.save(user);
        return "User registered successfully";
    }

    @GetMapping("/users")
    public List<LoginResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(LoginResponseDTO::new)
                .collect(Collectors.toList());
    }
}
