const express = require("express");
const conexion = require("../config/conexion");
const router = express.Router();

router.get("/",(req,res)=>{
    const consulta = "select * from pedidos";
    conexion.query(consulta,(error,resultado)=>{
        if(error){
            res.status(500).json({error:"error en la consulta de datos"});
        }else{
            res.json(resultado);
        }
    })
})

module.exports = router;