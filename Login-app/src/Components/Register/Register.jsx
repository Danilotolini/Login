import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'; // Certifique-se de criar um arquivo CSS correspondente
import { registerUser } from '../../apiService'; // Importe o serviço de API

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Função para lidar com o registro do usuário
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userData = { username, email, password };
      const response = await registerUser(userData); // Chama a função de registro da API
      console.log('Usuário cadastrado com sucesso:', response);
      // Lógica adicional após o sucesso do registro, como redirecionar ou exibir mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      // Tratar erros de registro, como exibir mensagens de erro para o usuário
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h1>Registrar</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de Usuário"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="icon eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button type="submit">Registrar</button>
        <div className="signup-link">
          <p>
            Já tem uma conta? <a href="/">Login</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
