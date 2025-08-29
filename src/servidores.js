// 🌐 Servidor web completo con todas las funcionalidades
import express from "express";
import cors from "cors";

export async function iniciarServidores() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  // ==================== RUTAS API ====================
  
  // Ruta de salud
  app.get("/api/salud", (req, res) => {
    res.json({ 
      mensaje: "¡Siempre Contigo activo! 🤖❤️",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      estado: "operativo"
    });
  });

  // Ruta de emergencia
  app.post("/api/emergencia", (req, res) => {
    const { tipo, ubicacion, mensaje, usuario } = req.body;
    console.log("🚨 Alerta de emergencia:", { tipo, ubicacion, usuario });
    
    // Simular envío de alertas a contactos y servicios
    const alertaId = Math.random().toString(36).substr(2, 9);
    
    res.json({ 
      recibido: true,
      alertaId,
      mensaje: "Ayuda en camino 🚑",
      timestamp: new Date().toISOString()
    });
  });

  // Ruta de asistente virtual
  app.post("/api/asistente", (req, res) => {
    const { mensaje, usuario } = req.body;
    console.log("🧠 Consulta a asistente:", { usuario, mensaje });
    
    // Simular respuesta inteligente
    const respuestas = {
      "hola": `¡Hola ${usuario}! ¿En qué puedo ayudarte?`,
      "soledad": "Siempre estoy aquí para acompañarte 💙",
      "salud": "Tu bienestar es mi prioridad ❤️",
      "default": "Entendido. Estoy aquí para lo que necesites."
    };
    
    const respuesta = respuestas[mensaje.toLowerCase()] || respuestas.default;
    
    res.json({ respuesta, timestamp: new Date().toISOString() });
  });

  // Ruta de estado de salud
  app.get("/api/salud/:usuario", (req, res) => {
    const { usuario } = req.params;
    
    res.json({
      usuario,
      metricas: {
        pasos: Math.floor(Math.random() * 8000),
        sueño: "7.5 horas",
        corazon: "72 lpm",
        estado: "👍 Excelente"
      },
      ultimaActualizacion: new Date().toISOString()
    });
  });

  // Ruta de dispositivos IoT
  app.get("/api/iot", (req, res) => {
    res.json({
      dispositivos: [
        { tipo: "termostato", estado: "conectado", valor: 22 },
        { tipo: "luces", estado: "conectado", valor: 80 },
        { tipo: "seguridad", estado: "conectado", valor: "activo" }
      ],
      automatizacion: "activada"
    });
  });

  // Ruta de información del proyecto
  app.get("/api/info", (req, res) => {
    res.json({
      proyecto: "Siempre Contigo",
      eslogan: "Tu compañero inteligente para una vida mejor",
      version: "1.0.0",
      descripcion: "Aplicación integral para adultos mayores que combina IA, seguridad y compañía",
      servicios: ["Seguridad", "Compañía", "Salud", "IoT", "Asistente Virtual"]
    });
  });

  // Servir archivos estáticos
  app.use(express.static("public"));

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`🌐 Servidor ejecutándose en puerto ${PORT}`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api/salud`);
      resolve(server);
    });
  });
}
