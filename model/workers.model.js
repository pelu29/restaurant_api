const conexion = require('../config/conexion');


const getAllTrabajadores = ()=>{
    return new Promise((resolve,reject)=>{
        const consulta = 'select * from trabajador';
        conexion.query(consulta,(error,resultado)=>{
            if(error){
                reject(error);
            }else{
                resolve(resultado);
            }
        })
    })
}

module.exports = {
    getAllTrabajadores
}
