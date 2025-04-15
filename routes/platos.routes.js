const platosController = require('../controllers/platos.controller');
const express = require('express');
const router = express.Router();

router.get("/",platosController.getAll);

module.exports = router;