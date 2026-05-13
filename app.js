require('dotenv').config();

const express = require('express');

const comentariosRoutes = require('./routes/comentarios_routes');
const proveedoresRoutes = require('./routes/proveedores_routes');

const app = express();

app.use(express.json());

app.use('/comentarios', comentariosRoutes);
app.use('/proveedores', proveedoresRoutes);

app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000`);
});