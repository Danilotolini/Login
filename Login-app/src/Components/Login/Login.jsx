import React, { useState, useEffect } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Verifica se há um usuário lembrado no localStorage ao carregar o componente
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      setUsername(rememberedUser);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email: username, senha: password });
      console.log(response.data);

      if (rememberMe) {
        // Se lembrar de mim estiver marcado, você pode armazenar o token ou sessão no localStorage ou cookie
        localStorage.setItem('rememberedUser', username);
      } else {
        localStorage.removeItem('rememberedUser');
      }

      alert('Login bem-sucedido!');
    } catch (error) {
      setError('Usuário ou senha incorretos.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail ou Nome de Usuário"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon email-icon" />
        </div>
        <div className="input-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="icon eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="recall-forget">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Lembrar de mim
          </label>
          <a href="/esqueceu-senha">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="/cadastro">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
