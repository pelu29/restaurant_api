const express = require("express");
const conexion = require("../config/conexion");
const router = express.Router();

router.get("/", (req, res) => {
    const consulta = `
    SELECT 
    pedidos.id_pedido AS 'ID Pedido',
    pedidos.id_plato AS 'ID Plato',
    pedidos.id_mesa AS 'Mesa Asociada',
    platos.nombre_plato AS 'Nombre Plato',
    pedidos.estado AS 'Estado'
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

router.post("/entregado", (req, res) => {
    const { id_mesa } = req.body
    const consulta = "update pedidos set estado = 'Entregado' where id_pedido = ?"
    conexion.query(consulta, [id_mesa], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "ocurrio un error al editar el campo de estado" })
        }
        res.status(200).json({ mensaje: "exito al editar el campo de estado" })
    })
})

router.post("/enCamino", (req, res) => {
    const { id_mesa } = req.body;
    const consulta = "update pedidos set estado = 'En Camino' where id_pedido = ?";
    conexion.query(consulta, [id_mesa], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "ocurrio un error al actualizar los datos" })
        }
        res.status(200).json({ mensaje: "datos actualizados correctamente, el plato esta en camino" })
    })
})

router.post("/enCocina", (req, res) => {
    const { id_mesa } = req.body
    const consulta = "update pedidos set estado = 'En Cocina' where id_pedido = ?";
    conexion.query(consulta, [id_mesa], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: "error al actualizar los datos a En Cocina" })
        }
        res.status(200).json({ mensaje: "datos actualizados correctamente, el plato esta cocina" })
    })
})
module.exports = router;