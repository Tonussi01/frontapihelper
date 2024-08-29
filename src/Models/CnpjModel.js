import SocioModel from './SocioModel';
import CnaeSecundarioModel from './CnaeSecundarioModel';

class CnpjModel {
    constructor(data) {
        this.uf = data.uf || '';
        this.cep = data.cep || '';
        this.qsa = Array.isArray(data.qsa) ? data.qsa.map(SocioModel.fromJson) : [];
        this.cnpj = data.cnpj || '';
        this.pais = data.pais || '';
        this.email = data.email || '';
        this.porte = data.porte || '';
        this.bairro = data.bairro || '';
        this.numero = data.numero || '';
        this.ddd_fax = data.ddd_fax || '';
        this.municipio = data.municipio || '';
        this.logradouro = data.logradouro || '';
        this.cnae_fiscal = data.cnae_fiscal || 0;
        this.codigo_pais = data.codigo_pais || '';
        this.complemento = data.complemento || '';
        this.codigo_porte = data.codigo_porte || 0;
        this.razao_social = data.razao_social || '';
        this.nome_fantasia = data.nome_fantasia || '';
        this.capital_social = data.capital_social || 0;
        this.ddd_telefone_1 = data.ddd_telefone_1 || '';
        this.ddd_telefone_2 = data.ddd_telefone_2 || '';
        this.opcao_pelo_mei = data.opcao_pelo_mei !== undefined ? data.opcao_pelo_mei : false;
        this.descricao_porte = data.descricao_porte || '';
        this.codigo_municipio = data.codigo_municipio || 0;
        this.cnaes_secundarios = Array.isArray(data.cnaes_secundarios) ? data.cnaes_secundarios.map(CnaeSecundarioModel.fromJson) : [];
        this.natureza_juridica = data.natureza_juridica || '';
        this.situacao_especial = data.situacao_especial || '';
        this.opcao_pelo_simples = data.opcao_pelo_simples !== undefined ? data.opcao_pelo_simples : false;
        this.situacao_cadastral = data.situacao_cadastral || 0;
        this.data_opcao_pelo_mei = data.data_opcao_pelo_mei || '';
        this.data_exclusao_do_mei = data.data_exclusao_do_mei || '';
        this.cnae_fiscal_descricao = data.cnae_fiscal_descricao || '';
        this.codigo_municipio_ibge = data.codigo_municipio_ibge || 0;
        this.data_inicio_atividade = data.data_inicio_atividade || '';
        this.data_situacao_especial = data.data_situacao_especial || '';
        this.data_opcao_pelo_simples = data.data_opcao_pelo_simples || '';
        this.data_situacao_cadastral = data.data_situacao_cadastral || '';
        this.nome_cidade_no_exterior = data.nome_cidade_no_exterior || '';
        this.codigo_natureza_juridica = data.codigo_natureza_juridica || 0;
        this.data_exclusao_do_simples = data.data_exclusao_do_simples || '';
        this.motivo_situacao_cadastral = data.motivo_situacao_cadastral || 0;
        this.ente_federativo_responsavel = data.ente_federativo_responsavel || '';
        this.identificador_matriz_filial = data.identificador_matriz_filial || 0;
        this.qualificacao_do_responsavel = data.qualificacao_do_responsavel || 0;
        this.descricao_situacao_cadastral = data.descricao_situacao_cadastral || '';
        this.descricao_tipo_de_logradouro = data.descricao_tipo_de_logradouro || '';
        this.descricao_motivo_situacao_cadastral = data.descricao_motivo_situacao_cadastral || '';
        this.descricao_identificador_matriz_filial = data.descricao_identificador_matriz_filial || '';
    }

    static fromJson(json) {
        return new CnpjModel(json);
    }
}

export default CnpjModel;
