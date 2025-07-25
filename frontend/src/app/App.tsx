import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './public/login';
import { Register } from './public/user/register/Register';
import { RegisterFormProvider } from './public/user/register/RegisterContext';
import { AppLayout } from '../components/AppLayout/AppLayout';


const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
      <Routes>
        {/* Tela de cadastro como padrão */}
        <Route 
          path="/" 
          element={
            <RegisterFormProvider>
              <Register />
            </RegisterFormProvider>
          } 
        />

        {/* Login disponível em uma rota separada */}
        <Route path="/login" element={<Login />} />
      </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
