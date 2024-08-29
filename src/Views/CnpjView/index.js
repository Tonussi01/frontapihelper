import React, { useState } from 'react';
import CnpjController from '../../Controllers/CnpjController'; 

const CnpjView = () => {
    const [cnpj, setCnpj] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');  
    const cnpjController = new CnpjController();

    const handleFetchCnpj = async () => {
        setError(''); 
        if (!cnpj || cnpj.length !== 14) {
            setError('Por favor, insira um CNPJ válido com 14 dígitos.');
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
        <div>
            <h1>Consulta de CNPJ</h1>
            <input
                type="text"
                placeholder="Digite o CNPJ"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
            />
            <button onClick={handleFetchCnpj}>Buscar CNPJ</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <h2>Razão Social: {data.razao_social}</h2>
                    <p>CNPJ: {data.cnpj}</p>
                    <p>UF: {data.uf}</p>
                    <p>Bairro: {data.bairro}</p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Capital Social: {data.capital_social.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p>Email: {data.email}</p>
                    <p>Município: {data.municipio}</p>
                    <p>Porte da Empresa: {data.descricao_porte}</p>
                    {data.qsa && (
                        <div>
                            <h3>Sócios:</h3>
                            {data.qsa.map((socio, index) => (
                                <p key={index}>{socio.nome_socio} - {socio.qualificacao_socio}</p>
                            ))}
                        </div>
                    )}
                    {data.cnaes_secundarios && (
                        <div>
                            <h3>CNAEs Secundários:</h3>
                            {data.cnaes_secundarios.map((cnae, index) => (
                                <p key={index}>{cnae.descricao}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CnpjView;
