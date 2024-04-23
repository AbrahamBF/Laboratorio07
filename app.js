const express = require('express');
const app = express();
const db = require('./db');
const routes = require('./routes'); // Importar las rutas

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', routes); // Usar las rutas definidas en el archivo routes.js

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`¡Servidor en ejecución en http://localhost:${PORT}`);
});