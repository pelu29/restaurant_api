const trabajadorModel = require('../model/workers.model');

const getAllTrabajadores = ()=>{
    return trabajadorModel.getAllTrabajadores();
}

const loginWorkers = (correo,contraseña)=>{
    return trabajadorModel.loginWorker(correo,contraseña);
}

module.exports = {
    getAllTrabajadores,
    loginWorkers
}