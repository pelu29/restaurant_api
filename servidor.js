require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usuariosRoutes = require("./routes/usuarios");
const { json } = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

// Agregar el prefijo /api a las rutas de usuarios
app.use('/api/usuarios', usuariosRoutes);

app.listen(process.env.PORT, () => {
    console.log("servidor corriendo en el puerto 3000");
});