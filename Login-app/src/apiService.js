// apiService.js

import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Altere para a URL do seu backend

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Timeout de 5 segundos para requisições
  withCredentials: true, // Permite o uso de credenciais (cookies)
});

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/register', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error; // Você pode tratar o erro de outra forma, se necessário
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/login', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error; // Trate o erro conforme necessário
  }
};

// Adicione outras funções para outras operações no backend, se necessário

export default axiosInstance;
