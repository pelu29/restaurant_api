const pedidoService = require('../service/pedidos.service');

const getAllPedidos = async (req,res)=>{
    try{
        const pedidos = await pedidoService.getAllPedidos();
        res.json(pedidos)
    }catch(error){
        res.status(500).json({error:"ocurrio un error al solicitar los pedidos"})
    }
}

const insertPedidos = async (req, res) => {
    try {
        const { id_mesa, platos } = req.body;

        if (!id_mesa || !platos || !Array.isArray(platos)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        await pedidoService.insertarPedidos(id_mesa, platos);
        res.status(200).json({ mensaje: "Pedido enviado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al insertar pedidos", detalles: error });
    }
};

/*-------------------------------------------------editar pedidos---------------------------------------------------------*/

const pedidoEntregado = async (req,res)=>{
    try{
        const {id_pedido} = req.body;
        const resultado = await pedidoService.pedidoEntregado(id_pedido);
        res.status(200).json({mensaje:"pedido entregado exitosamente"});
    }catch(error){
        res.status(500).json({mensaje:"error al entregar el pedido"})
    }
}

const pedidoEnCamino = async (req,res)=>{
    try{
        const {id_pedido} = req.body;
        const resultado = await pedidoService.pedidoEnCamino(id_pedido);
        res.status(200).json({mensaje:"el estado del pedido fue cambiado a en camino exitosamente"});
    }catch(error){
        res.status(500).json({mensaje:"error al entregar el pedido"})
    }
}

const pedidoEnCocina = async (req,res)=>{
    try{
        const {id_pedido} = req.body;
        const resultado = await pedidoService.pedidoEnCocina(id_pedido);
        res.status(200).json({mensaje:"el estado del pedido fue cambiado a en cocina exitosamente"});
    }catch(error){
        res.status(500).json({mensaje:"error al entregar el pedido"})
    }
}

/*------------------------------------------------------consultar pedidos-----------------------------------------------------------------*/

const consultarPedido = async(req,res)=>{
    try{
        const {id_mesa} = req.body;
        const resultado = await pedidoService.consultarPedido(id_mesa);
        res.status(200).json(resultado)
    }catch(error){
        res.status(500).json({mensaje:"ocurrio un error al solicitar los pedidos de la mesa"})
    }
}

    module.exports = {
    getAllPedidos,
    insertPedidos,
    pedidoEntregado,
    pedidoEnCamino,
    pedidoEnCocina,
    consultarPedido
}