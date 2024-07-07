// src/Components/Login/ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você faria a chamada para a API para enviar o e-mail de redefinição de senha.
    console.log('Email para redefinição de senha:', email);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Esqueceu a Senha?</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar e-mail de redefinição</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
