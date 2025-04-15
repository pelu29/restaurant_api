const platoService = require('../service/platos.service');

const getAll = async (req,res)=>{
    try{
        const platos = await platoService.getAllPlatos();
        res.json(platos);
    }catch(error){
        res.status(500).json({error:"hubo error al consultar los platos"})
    }
}

module.exports = {
    getAll
}