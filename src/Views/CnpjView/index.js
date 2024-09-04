import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CnpjController from '../../Controllers/CnpjController';

const CnpjView = () => {
    const [cnpj, setCnpj] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [showSocios, setShowSocios] = useState(false);
    const [showCnaes, setShowCnaes] = useState(false);

    const cnpjController = new CnpjController();
    const navigate = useNavigate(); 

    const handleFetchCnpj = async () => {
        setError('');
        if (!cnpj || cnpj.length !== 14) {
            setError('Por favor, insira apenas os 14 números do CNPJ.');
            return;
        }
        try {
            const cnpjData = await cnpjController.getCnpjData(cnpj);
            setData(cnpjData);
        } catch (error) {
            console.error("Erro ao buscar dados do CNPJ:", error);
            setError('Falha ao buscar dados do CNPJ. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <button className="back-button" onClick={() => navigate('/')}>
                &#8592; Voltar
            </button><br/><br/>
            <h1 className="title">Consulta de CNPJ</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="year-input"
                    placeholder="Digite o CNPJ"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                />
                <button onClick={handleFetchCnpj}>Buscar CNPJ</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div className="cnpj-result"><br/>
                    <h2>Razão Social: {data.razao_social}</h2><br/>
                    <p><strong>CNPJ:</strong> {data.cnpj}</p>
                    <p><strong>UF:</strong> {data.uf}</p>
                    <p><strong>Bairro:</strong> {data.bairro}</p>
                    <p><strong>Logradouro:</strong> {data.logradouro}</p>
                    <p><strong>Capital Social:</strong> {data.capital_social.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Município:</strong> {data.municipio}</p>

                    {/* Seção de Sócios */}
                    <div className="expand-section">
                        <button onClick={() => setShowSocios(!showSocios)}>
                            {showSocios ? 'Esconder Sócios' : 'Mostrar Sócios'}
                        </button>
                        {showSocios && (
                            <div className="socios-section">
                                <h3>Sócios:</h3>
                                {data.qsa.map((socio, index) => (
                                    <p key={index}>
                                        <strong>{socio.nome_socio}</strong> - {socio.qualificacao_socio}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Seção de CNAEs Secundários */}
                    <div className="expand-section">
                        <button onClick={() => setShowCnaes(!showCnaes)}>
                            {showCnaes ? 'Esconder CNAEs Secundários' : 'Mostrar CNAEs Secundários'}
                        </button>
                        {showCnaes && (
                            <div className="cnaes-section">
                                <h3>CNAEs Secundários:</h3>
                                {data.cnaes_secundarios.map((cnae, index) => (
                                    <p key={index}>{cnae.descricao}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CnpjView;
