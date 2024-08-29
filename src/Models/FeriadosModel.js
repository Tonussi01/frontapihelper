class FeriadosModel {
    constructor(date, name, type) {
        this.date = new Date(date); 
        this.name = name;
        this.type = type;
    }

    static fromJson(json) {
        return new FeriadosModel(json.date, json.name, json.type);
    }
}

export default FeriadosModel;