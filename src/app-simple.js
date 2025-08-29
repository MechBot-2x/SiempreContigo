// 🧠 SIEMPRE CONTIGO - Versión Simplificada
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas básicas
app.get("/api/salud", (req, res) => {
  res.json({ 
    mensaje: "¡Siempre Contigo activo! 🤖❤️",
    version: "1.0.0",
    estado: "operativo"
  });
});

app.post("/api/asistente", (req, res) => {
  const { mensaje, usuario } = req.body;
  res.json({ 
    respuesta: \`¡Hola \${usuario}! Mensaje recibido: \${mensaje}\`,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log("🚀 Siempre Contigo ejecutándose en puerto", PORT);
});
