const express = require("express");
const conexion = require("../config/conexion");
const router = express.Router();

// Ruta para obtener todos los platos de la BD railway
router.get("/", (req, res) => {
    const consulta = `
    select 
    platos.nombre_plato as "nombre_plato",
    platos.descripcion as "descripcion",
    platos.precio as "precio",
    categorias.nombre_categoria as "categoria",
    platos.disponibilidad as "disponibilidad"
    from platos
    left join categorias
    on platos.id_categoria = categorias.id_categoria

    `
    conexion.query(consulta, (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener platos" });
            return;
        }
        res.json(resultados);
    });
});

// Exportamos la ruta
module.exports = router;