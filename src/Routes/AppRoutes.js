import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from '../Views/HomeView';
import FeriadosView from '../Views/FeriadosView';
import CnpjView from '../Views/CnpjView';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/feriados" element={<FeriadosView />} />
                <Route path="/cnpj" element={<CnpjView />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
