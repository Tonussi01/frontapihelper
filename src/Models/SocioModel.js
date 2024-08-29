class SocioModel {
    constructor(data) {
        this.pais = data.pais;
        this.nome_socio = data.nome_socio;
        this.codigo_pais = data.codigo_pais;
        this.faixa_etaria = data.faixa_etaria;
        this.cnpj_cpf_do_socio = data.cnpj_cpf_do_socio;
        this.qualificacao_socio = data.qualificacao_socio;
        this.codigo_faixa_etaria = data.codigo_faixa_etaria;
        this.data_entrada_sociedade = data.data_entrada_sociedade;
        this.identificador_de_socio = data.identificador_de_socio;
        this.cpf_representante_legal = data.cpf_representante_legal;
        this.nome_representante_legal = data.nome_representante_legal;
        this.codigo_qualificacao_socio = data.codigo_qualificacao_socio;
        this.qualificacao_representante_legal = data.qualificacao_representante_legal;
        this.codigo_qualificacao_representante_legal = data.codigo_qualificacao_representante_legal;
    }

    static fromJson(json) {
        return new SocioModel(json);
    }
}

export default SocioModel;
