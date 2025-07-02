import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando a função createRoot
import App from './app/App'; // Importando o componente principal

// Seleciona o elemento do DOM onde o React irá renderizar a aplicação
const container = document.getElementById('root');
const root = createRoot(container!); // Cria uma raiz para a renderização

// Renderiza o componente App dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);