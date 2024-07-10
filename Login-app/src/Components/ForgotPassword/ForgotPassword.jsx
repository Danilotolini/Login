import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      // Aqui você faria a chamada para o seu backend para enviar o e-mail de recuperação de senha
      console.log('Solicitando recuperação de senha para:', email);
      // Lógica simulada de sucesso
      setSuccessMessage('Um e-mail foi enviado para você com instruções para redefinir sua senha.');
      setErrorMessage('');
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
      setSuccessMessage('');
      setErrorMessage('Ocorreu um erro ao solicitar a recuperação de senha. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleResetPassword}>
        <h1>Esqueceu sua Senha?</h1>
        <p>Informe seu e-mail e enviaremos instruções para redefinir sua senha.</p>
        <div className="input-field">
          <input
            type="email"
            placeholder="Seu E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Enviar E-mail</button>
        <div className="signup-link">
          <p>
            Lembrou a senha? <a href="/">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
