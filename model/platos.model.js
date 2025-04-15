const conexion = require('../config/conexion');

const getAllPlatos = ()=>{
    return new Promise((resolve,reject)=>{
        const consulta = `
        select 
        platos.id_plato as "id_plato",
        platos.nombre_plato as "nombre_plato",
        platos.descripcion as "descripcion",
        platos.precio as "precio",
        categorias.nombre_categoria as "categoria",
        platos.disponibilidad as "disponibilidad"
        from platos
        left join categorias
        on platos.id_categoria = categorias.id_categoria

    `
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
    getAllPlatos
}
