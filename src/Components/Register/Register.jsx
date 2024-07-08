import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'; // Certifique-se de criar um arquivo CSS correspondente

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('Dados de Registro:', { username, email, password });
    // Adicione aqui a lógica de registro, como chamadas de API
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
