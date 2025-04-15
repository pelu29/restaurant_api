const platosModel = require('../model/platos.model');

const getAllPlatos = ()=>{
    return platosModel.getAllPlatos();
}

module.exports = {
    getAllPlatos
}