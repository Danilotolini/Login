package com.example.Login_api.Controller;

import com.example.Login_api.Login.Login;
import com.example.Login_api.Login.LoginRepository;
import com.example.Login_api.Login.LoginResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private LoginRepository repository;
    @PostMapping
    public void saveLogin(@RequestBody LoginRequestDTO data){
        Login loginData = new Login(data);
        repository.save(loginData);
        return;

    }
    @GetMapping
    public List<LoginResponseDTO> getAll(){

        List<LoginResponseDTO> loginList = repository.findAll().stream().map(LoginResponseDTO::new).toList();
        return loginList;
    }
}
