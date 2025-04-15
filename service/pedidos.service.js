const pedidosModel = require('../model/pedidos.model');

const getAllPedidos = () => {
    return pedidosModel.getAllPedidos();
}

const insertarPedidos = async (id_mesa, platos) => {
    const resultados = [];

    for (const plato of platos) {
        const resultado = await pedidosModel.postAllPedido(plato.id_plato, id_mesa);
        resultados.push(resultado);
    }

    return resultados;
};

const pedidoEntregado = async (id_pedido) => {
    return pedidosModel.pedidoEntregado(id_pedido);
}

const pedidoEnCamino = async (id_pedido) => {
    return pedidosModel.pedidoEnCamino(id_pedido);
}

const pedidoEnCocina = async (id_pedido) => {
    return pedidosModel.pedidoEnCocina(id_pedido);
}

/*------------------------------------------consultar pedidos-----------------------------------------------------*/

const consultarPedido = (id_mesa) =>{
    return pedidosModel.consultarPedido(id_mesa);
}

module.exports = {
    getAllPedidos,
    insertarPedidos,
    pedidoEntregado,
    pedidoEnCamino,
    pedidoEnCocina,
    consultarPedido
}