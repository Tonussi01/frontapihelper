import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Menu Principal</h1>
      <button onClick={() => navigate('/cnpj')}>Buscar CNPJ</button>
      <button onClick={() => navigate('/feriados')}>Buscar Feriados</button>
    </div>
  );
};

export default HomeView;
