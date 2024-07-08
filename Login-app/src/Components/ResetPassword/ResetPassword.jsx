// src/Components/Login/ResetPassword/ResetPassword.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ResetPassword.css'; // Crie um arquivo CSS para estilização

const ResetPassword = () => {
  const { token } = useParams(); // Obtém o token da URL
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem!');
      return;
    }
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });
      if (response.ok) {
        setMessage('Senha redefinida com sucesso.');
      } else {
        setMessage('Erro ao redefinir a senha.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMessage('Erro ao redefinir a senha.');
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Redefinir Senha</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <h1>Redefinir Senha</h1>
        <div className="input-field">
          <input
            type="password"
            placeholder="Nova senha"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme a nova senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Redefinir Senha</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
