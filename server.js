const express = require('express');
const app = express();
const path = require('path');

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de API
app.get('/api/salud', (req, res) => {
    res.json({ mensaje: 'Bienvenido a Siempre Contigo - API de Salud' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
