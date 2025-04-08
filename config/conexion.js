require("dotenv").config();
const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

conexion.connect((error) => {
    if (error) {
        console.log("Ocurrió un error al conectar a la BD:", error.stack);
        return;
    }
    console.log("DB conectada exitosamente");
});

// 🔁 Mantener conexión activa con un 'ping' cada 4 minutos
setInterval(() => {
    conexion.query('SELECT 1', (err) => {
        if (err) {
            console.error("Error al hacer ping a la BD:", err.message);
        } else {
            console.log("Ping a la BD enviado correctamente");
        }
    });
}, 1000 * 60 * 4); // Cada 4 minutos

module.exports = conexion;