package com.example.Login_api.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void save(User user) {
        // Criptografar a senha antes de salvar
        user.setSenha(bCryptPasswordEncoder.encode(user.getSenha()));
        // Aqui você faria a lógica para salvar o usuário no banco de dados, por exemplo:
        // userRepository.save(user);
    }

    // Outros métodos do serviço
}
