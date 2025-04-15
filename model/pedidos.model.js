const conexion = require("../config/conexion")

const getAllPedidos = () => {
    return new Promise((resolve, reject) => {
        const consulta = `
        SELECT 
        pedidos.id_pedido AS 'id_pedido',
        pedidos.id_plato AS 'id_plato',
        pedidos.id_mesa AS 'mesa_asociada',
        platos.nombre_plato AS 'nombre_plato',
        pedidos.estado AS 'estado'
        FROM pedidos
        LEFT JOIN platos ON pedidos.id_plato = platos.id_plato;
    `
        conexion.query(consulta, (error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        })
    })
}

const postAllPedido = (id_plato, id_mesa) => {
    return new Promise((resolve, reject) => {
        const consulta = "INSERT INTO pedidos(id_plato, id_mesa, estado) VALUES(?, ?, 'Pendiente')";
        conexion.query(consulta, [id_plato, id_mesa], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

/*----------------------------------Editar pedidos----------------------------*/

const pedidoEntregado = (id_pedido) => {
    return new Promise((resolve, reject) => {
        const consulta = "update pedidos set estado = 'Entregado' where id_pedido = ?";
        conexion.query(consulta, [id_pedido], (err, resul) => {
            if (err) reject(err);
            else resolve(resul)
        })
    })
}

const pedidoEnCamino = (id_pedido) => {
    return new Promise((resolve, reject) => {
        const consulta = "update pedidos set estado = 'En Camino' where id_pedido = ?";
        conexion.query(consulta, [id_pedido], (err, resul) => {
            if (err) reject(err);
            else resolve(resul)
        })
    })
}

const pedidoEnCocina = (id_pedido) => {
    return new Promise((resolve, reject) => {
        const consulta = "update pedidos set estado = 'En Cocina' where id_pedido = ?";
        conexion.query(consulta, [id_pedido], (err, resul) => {
            if (err) reject(err);
            else resolve(resul)
        })
    })
}

/*---------------------------------------------------consultar pedidos-----------------------------------------------------------------------*/


const consultarPedido = (id_mesa)=>{
    return new Promise((resolve,reject)=>{
        const consulta = `SELECT 
        pedidos.id_pedido AS 'id_pedido',
        pedidos.id_mesa AS 'mesa_asociada',
        platos.nombre_plato AS 'nombre_plato',
        platos.precio AS 'precio',
        pedidos.estado AS 'estado'
        FROM pedidos
        LEFT JOIN platos ON pedidos.id_plato = platos.id_plato
        where pedidos.id_mesa = ?`

        conexion.query(consulta,[id_mesa],(err,resul)=>{
            if(err) reject(err)
                else resolve(resul)
        })

    })
}


module.exports = {
    getAllPedidos,
    postAllPedido,
    pedidoEntregado,
    pedidoEnCamino,
    pedidoEnCocina,
    consultarPedido
}