const workerService = require('../service/workers.service');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const getAll = async (req,res)=>{
    try{
        const trabajadores = await workerService.getAllTrabajadores();
        res.json(trabajadores);
    }catch(error){
        res.status(500).json({error:"hubo un error al obtener los trabajadores"})
    }
}

const LoginWork = async (req,res)=>{
    try{
        const {correo,contraseña} = req.body;
        const resultado = await workerService.loginWorkers(correo,contraseña);
        if(!resultado){
            res.status(401).json({mensaje:"credenciales incorrectas"})
        }

        const token = jwt.sign(
            {correo:resultado.correo},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )
        res.status(200).json({
            mensaje:"login exitoso",
            token:token
        })
    }catch(error){
        res.status(500).json({error:"ocurrio un error del sistema con la consulta"});
    }
}


module.exports = {
    getAll,
    LoginWork
}