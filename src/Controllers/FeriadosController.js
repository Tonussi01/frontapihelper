import FeriadosModel from '../Models/FeriadosModel';

export class FeriadosController {
    constructor() {
        this.baseUrl = 'https://localhost:7273/Feriados'; 
    }

    async getFeriadosByYear(year) {
        try {
            const response = await fetch(`${this.baseUrl}/${year}`, {
                method: 'GET',
                headers: {
                    'Accept': 'text/plain',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar os feriados');
            }

            const data = await response.json();
            return data.map(item => FeriadosModel.fromJson(item));
        } catch (error) {
            console.error('Erro ao buscar feriados:', error);
            throw error;
        }
    }
}
