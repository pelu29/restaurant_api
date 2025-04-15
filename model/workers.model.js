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

const loginWorker = (correo,contraseña) =>{
    return new Promise((resolve,reject)=>{
        const consulta = 'SELECT * FROM trabajador WHERE correo = ? AND contraseña = ?';
        conexion.query(consulta,[correo,contraseña],(err,resul)=>{
            if(err) reject(err);
            else resolve(resul)
        })
    })
}


module.exports = {
    getAllTrabajadores,
    loginWorker
}
