// 🧠 SIEMPRE CONTIGO - Cerebro de la aplicación
import { iniciarServidores } from "./servidores.js";
import { monitorearUsuario } from "./ia/monitoreo.js";
import { configurarSistemaEmergencias } from "./servicios/emergencias.js";
import { ConectorIoT } from "./servicios/iot.js";
import { AsistenteVirtual } from "./ia/asistente.js";
import { SistemaSalud } from "./servicios/salud.js";

export class SiempreContigoApp {
  constructor() {
    this.estaActivo = false;
    this.version = "1.0.0";
    this.usuariosActivos = 0;
  }

  async iniciar() {
    try {
      console.log("🤖 Inicializando Siempre Contigo...");
      console.log("🎯 Tu compañero inteligente para una vida mejor");
      
      // Iniciar todos los módulos
      await this.iniciarModulos();
      
      this.estaActivo = true;
      this.mostrarMensajeBienvenida();
      
      return true;
    } catch (error) {
      console.error("❌ Error al iniciar la aplicación:", error.message);
      return false;
    }
  }

  async iniciarModulos() {
    console.log("🚀 Iniciando módulos de IA y servicios...");
    
    // Servidor web y API
    await iniciarServidores();
    
    // Sistema de IA
    await monitorearUsuario();
    
    // Servicios de emergencia
    await configurarSistemaEmergencias();
    
    // Conexión IoT (dispositivos inteligentes)
    const iot = new ConectorIoT();
    await iot.conectarDispositivos();
    
    // Asistente virtual
    const asistente = new AsistenteVirtual();
    await asistente.inicializar();
    
    // Sistema de salud
    const salud = new SistemaSalud();
    await salud.iniciarMonitoreo();
    
    console.log("✅ Todos los módulos iniciados correctamente");
  }

  mostrarMensajeBienvenida() {
    console.log("\n" + "=".repeat(60));
    console.log("🎉 ¡SIEMPRE CONTIGO ACTIVO Y FUNCIONANDO!");
    console.log("=".repeat(60));
    console.log("🤖 Asistente virtual: ACTIVO");
    console.log("📡 Servidor API: ACTIVO (puerto 3000)");
    console.log("🚨 Emergencias: CONFIGURADO");
    console.log("❤️  Monitoreo salud: ACTIVO");
    console.log("🏠 IoT Hogar: CONECTADO");
    console.log("📊 Usuarios: 1 activo");
    console.log("=".repeat(60));
    console.log("❤️  Tecnología con corazón - Siempre contigo");
    console.log("=".repeat(60) + "\n");
  }

  getEstado() {
    return {
      activo: this.estaActivo,
      version: this.version,
      timestamp: new Date().toISOString(),
      usuarios: this.usuariosActivos,
      mensaje: "Siempre Contigo - Tu compañero inteligente"
    };
  }
}

// Iniciar aplicación
const app = new SiempreContigoApp();
app.iniciar().then(exito => {
  if (exito) {
    console.log("🎯 Aplicación ejecutándose correctamente!");
    console.log("🌐 Accede en: http://localhost:3000");
    console.log("📋 API Salud: http://localhost:3000/api/salud");
  }
});
