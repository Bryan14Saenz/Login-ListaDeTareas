const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Routes/AutorizacionRoutes');
const taskRoutes = require('./Routes/TareasRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
const mongoURI = 'mongodb://localhost:27017/tareasDB';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Compass'))
  .catch((err) => console.log(err));

// Usar rutas
app.use('/api/auth', authRoutes); // Para autenticación
app.use('/api', taskRoutes); // Para tareas

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor en el puerto 5000');
});
