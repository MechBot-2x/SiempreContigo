#!/usr/bin/env node
console.log("🚀 Siempre Contigo - Iniciando aplicación...");
console.log("🤖 IA de asistencia para adultos mayores");
console.log("💯 Sistema de monitoreo y seguridad");

// Importar módulos principales
import("./src/app.js")
  .then((module) => {
    console.log("✅ Aplicación iniciada correctamente");
  })
  .catch((error) => {
    console.log("❌ Error al iniciar la aplicación:", error.message);
    console.log("📋 Ejecuta \`npm test\` para verificar los tests primero");
  });
