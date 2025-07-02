import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './public/login'; // Componente de Login

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;