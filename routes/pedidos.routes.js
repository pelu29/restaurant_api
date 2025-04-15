const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidos.controller')

router.get("/",pedidosController.getAllPedidos);
router.post("/insertPedido",pedidosController.insertPedidos);
router.post("/entregado",pedidosController.pedidoEntregado);
router.post("/enCamino",pedidosController.pedidoEnCamino);
router.post("/enCocina",pedidosController.pedidoEnCocina);
router.post("/consultarPedido",pedidosController.consultarPedido);

module.exports = router