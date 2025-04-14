const express = require("express");
const conexion = require("../config/conexion");
const router = express.Router();

router.get("/", (req, res) => {
    const consulta = `
    SELECT 
    pedidos.id_pedido AS 'id_pedido',
    pedidos.id_plato AS 'id_plato',
    pedidos.id_mesa AS 'mesa_asociada',
    platos.nombre_plato AS 'nombre_plato',
    pedidos.estado AS 'estado'
    FROM pedidos
    LEFT JOIN platos ON pedidos.id_plato = platos.id_plato;
    ` ;
    conexion.query(consulta, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "error en la consulta de datos" });
        } else {
            res.json(resultado);
        }
    })
})

router.post("/insertPedido", (req, res) => {
    const { id_mesa, platos } = req.body;

    // Realizar las inserciones de forma secuencial
    platos.forEach(plato => {
        const consulta = "INSERT INTO pedidos(id_plato, id_mesa, estado) VALUES(?, ?, 'Pendiente')";
        conexion.query(consulta, [plato.id_plato, id_mesa], (error, resultado) => {
            if (error) {
                return res.status(500).json({ error: "Ocurrió un error al insertar el pedido", detalles: error });
            }
        });
    });

    // Responder después de que todas las inserciones han sido procesadas
    res.status(200).json({ mensaje: "Pedido enviado exitosamente" });
});

/*--------------------------------------editar estado-------------------------------------------*/

router.post("/entregado", (req, res) => {
    const { id_pedido } = req.body
    const consulta = "update pedidos set estado = 'Entregado' where id_pedido = ?"
    conexion.query(consulta, [id_pedido], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "ocurrio un error al editar el campo de estado" })
        }
        res.status(200).json({ mensaje: "exito al editar el campo de estado" })
    })
})

router.post("/enCamino", (req, res) => {
    const { id_pedido } = req.body;
    const consulta = "update pedidos set estado = 'En Camino' where id_pedido = ?";
    conexion.query(consulta, [id_pedido], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "ocurrio un error al actualizar los datos" })
        }
        res.status(200).json({ mensaje: "datos actualizados correctamente, el plato esta en camino" })
    })
})

router.post("/enCocina", (req, res) => {
    const { id_pedido } = req.body
    const consulta = "update pedidos set estado = 'En Cocina' where id_pedido = ?";
    conexion.query(consulta, [id_pedido], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "error al actualizar los datos a En Cocina" })
        }
        res.status(200).json({ mensaje: "datos actualizados correctamente, el plato esta cocina" })
    })
})

/*--------------------------------------------------solicitar informacion de acuerdo al id_pedido--------------------------------------------------------------------*/

router.post("/consultarPedido",(req,res)=>{
    const {id_mesa} = req.body;
    const consulta = `    SELECT 
    pedidos.id_pedido AS 'id_pedido',
	pedidos.id_mesa AS 'mesa_asociada',
    platos.nombre_plato AS 'nombre_plato',
    platos.precio AS 'precio',
    pedidos.estado AS 'estado'
    FROM pedidos
    LEFT JOIN platos ON pedidos.id_plato = platos.id_plato
    where pedidos.id_mesa = ?`

    conexion.query(consulta,[id_mesa],(error,resultado)=>{
        if(error){
            res.status(500).json({error:"ocurrio un error al solicitar la informacion"})
        }else if(resultado.length == 0){
            res.status(200).json({mensaje:"no hay pedidos para esta mesa"})
        }
        res.status(200).json(resultado)
    })
})
module.exports = router;