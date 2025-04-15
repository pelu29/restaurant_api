const workerService = require('../service/workers.service');

const getAll = async (req,res)=>{
    try{
        const trabajadores = await workerService.getAllTrabajadores();
        res.json(trabajadores);
    }catch(error){
        res.status(500).json({error:"hubo un error al obtener los trabajadores"})
    }
}

module.exports = {
    getAll
}