import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/ResetPassword/ResetPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Login</title>
                  </Helmet>
                  <Login />
                </>
              }
            />
            <Route
              path="/cadastro"
              element={
                <>
                  <Helmet>
                    <title>Cadastro</title>
                  </Helmet>
                  <Register />
                </>
              }
            />
            <Route
              path="/esqueceu-senha"
              element={
                <>
                  <Helmet>
                    <title>Esqueceu a Senha</title>
                  </Helmet>
                  <ForgotPassword />
                </>
              }
            />
            <Route
              path="/redefinir-senha/:token"
              element={
                <>
                  <Helmet>
                    <title>Redefinir Senha</title>
                  </Helmet>
                  <ResetPassword />
                </>
              }
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
