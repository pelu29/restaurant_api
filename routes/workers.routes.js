const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workers.controller');

router.get("/",workerController.getAll);

module.exports = router