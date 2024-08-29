class CnaeSecundarioModel {
    constructor(data) {
        this.codigo = data.codigo;
        this.descricao = data.descricao;
    }

    static fromJson(json) {
        return new CnaeSecundarioModel(json);
    }
}

export default CnaeSecundarioModel;
