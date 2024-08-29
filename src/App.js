import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import './App.css';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
}

export default App;
