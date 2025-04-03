const express = require("express");
const conexion = require("../config/conexion");
const router = express.Router();

// Ruta para obtener todos los platos de la BD railway
router.get("/", (req, res) => {
    conexion.query("SELECT * FROM platos", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener platos" });
            return;
        }
        res.json(resultados);
    });
});

// Ruta para insertar un nuevo plato
router.post("/", (req, res) => {
    const { plato, precio, descripcion, categoria } = req.body;
    const valores = [plato, precio, descripcion, categoria];
    const consulta = "INSERT INTO platos(plato, precio, descripcion, categoria) VALUES(?, ?, ?, ?)";
    conexion.query(consulta, valores, (error, resultado) => {
        if (error) {
            return res.status(400).json({ error: "Ocurrió un error al insertar los datos" });
        }
        return res.status(200).json({ mensaje: "Plato agregado exitosamente" });
    });
});

// Exportamos la ruta
module.exports = router;