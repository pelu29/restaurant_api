const express = require("express");
const conexion = require("../config/conexion");
const { error } = require("console");
const router = express.Router();

//ruta para obtener todos los platos de la bd railway
router.get("/",(req,res)=>{
    conexion.query("select * from platos",(error,resultados)=>{
        if(error){
            res.status(500).json({error:"error al obtener usuarios"});
            return;
        }
        res.json(resultados);
    });
});

router.post("/",(req,res)=>{
    const {plato,precio,descripcion,categoria} = req.body;
    const valores = [plato,precio,descripcion,categoria];
    const consulta = "insert into platos(plato,precio,descripcion,categoria) values(?,?,?,?)";
    conexion.query(consulta,valores,(error,resultado)=>{
        if(error){
            return res.status(400).json({error:"ocurrio un error al insertar los datos"})
        }
        return res.status(200).json({mensaje:"resultado agregado exitosamente"})
    })
})
//exportamos la ruta
module.exports = router;