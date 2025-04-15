const trabajadorModel = require('../model/workers.model');

const getAllTrabajadores = ()=>{
    return trabajadorModel.getAllTrabajadores();
}

module.exports = {
    getAllTrabajadores
}