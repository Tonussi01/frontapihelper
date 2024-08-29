import React, { useState } from 'react';
import { FeriadosController } from '../../Controllers/FeriadosController';

const FeriadosView = () => {
    const [year, setYear] = useState('');
    const [feriados, setFeriados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const feriadosController = new FeriadosController();

    const handleFetchFeriados = async () => {
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
        <div>
            <h1>Buscar Feriados</h1>
            <input
                type="text"
                placeholder="Digite o ano"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleFetchFeriados} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar Feriados'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {feriados.map((feriado, index) => (
                    <li key={index}>
                        <strong>{feriado.name}</strong> - {feriado.date.toLocaleDateString()} ({feriado.type})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeriadosView;
