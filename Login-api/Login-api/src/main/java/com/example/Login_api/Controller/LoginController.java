package com.example.Login_api.Controller;

import com.example.Login_api.Login.User;
import com.example.Login_api.Login.UserRepository;
import com.example.Login_api.Login.LoginRequestDTO;
import com.example.Login_api.Login.LoginResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public void saveLogin(@RequestBody LoginRequestDTO data){
        User userData = new User(data);
        repository.save(userData);
    }

    @GetMapping
    public List<LoginResponseDTO> getAll(){
        return repository.findAll().stream().map(LoginResponseDTO::new).toList();
    }
}
