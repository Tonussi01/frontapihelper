
import CnpjModel from '../Models/CnpjModel';

export class CnpjController {
    constructor() {
        this.baseUrl = 'https://localhost:7273/Cnpj'; 
    }

    async getCnpjData(cnpj) {
        try {
            const response = await fetch(`${this.baseUrl}/${cnpj}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação ao buscar dados do CNPJ');
            }

            const data = await response.json();
            return CnpjModel.fromJson(data);
        } catch (error) {
            console.error('Erro ao buscar dados do CNPJ:', error);
            throw error;
        }
    }
}

export default CnpjController;
