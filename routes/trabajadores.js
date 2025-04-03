const express = require("express");
const conexion = require("../config/conexion")
const router = express.Router()

router.get("/",(req,res)=>{
    const consulta = "select * from trabajador";
    conexion.query(consulta,(error,resultado)=>{
        if(error){
            res.status(500).json({error:"ocurrio un error en la consulta"});
        }else{
            res.json(resultado);
        }
    })
})

module.exports = router;