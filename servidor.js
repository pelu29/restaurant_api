require("dotenv").config();
const express = require("express");
const cors = require("cors");
const platosRouter = require("./routes/platos");
const trabajadoresRouter = require("./routes/trabajadores")
const pedidosRouter = require("./routes/pedidos")
const { json } = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

// Agregar el prefijo /api a las rutas de usuarios
app.use('/api/platos', platosRouter);
app.use("/api/trabajadores",trabajadoresRouter);
app.use("/api/pedidos",pedidosRouter);

app.listen(process.env.PORT, () => {
    console.log("servidor corriendo en el puerto 3000");
});