const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

<<<<<<< HEAD
// Ruta de API
app.get('/api/salud', (req, res) => {
    res.json({ mensaje: 'Bienvenido a Siempre Contigo - API de Salud' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
=======
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
>>>>>>> caee153 (Implementación inicial del proyecto)
});
