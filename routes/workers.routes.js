const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workers.controller');

router.get("/",workerController.getAll);
router.post("/login",workerController.LoginWork);

module.exports = router