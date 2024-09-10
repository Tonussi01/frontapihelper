import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeriadosController } from '../../Controllers/FeriadosController';

const FeriadosView = () => {
    const [year, setYear] = useState('');
    const [feriados, setFeriados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const feriadosController = new FeriadosController();

    const handleFetchFeriados = async () => {

        const yearInt = parseInt(year);

        // Validação para garantir que o ano está entre 1900 e 2199
        if (isNaN(yearInt) || yearInt < 1900 || yearInt > 2199) {
            setError('Por favor, insira um ano válido entre 1900 e 2199.');
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const result = await feriadosController.getFeriadosByYear(year);
            setFeriados(result);
        } catch (error) {
            setError('Não foi possível buscar os feriados');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <button className="back-button" onClick={() => navigate('/')}>
                &#8592; Voltar
            </button><br/><br/>
            <h1 className="title">Buscar Feriados</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="year-input"
                    placeholder="Digite o ano"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button onClick={handleFetchFeriados} disabled={loading}>
                    {loading ? 'Carregando...' : 'Buscar Feriados'}
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="feriado-list">
                {feriados.map((feriado, index) => (
                    <div key={index} className="feriado-card">
                        <h2>{feriado.name}</h2>
                        <p>{feriado.date.toLocaleDateString()}</p>
                        <p>Tipo: {feriado.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeriadosView;
