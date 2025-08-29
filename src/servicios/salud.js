// ❤️ Sistema de Monitoreo de Salud
export class SistemaSalud {
  constructor() {
    this.metricas = {
      actividad: 0,
      sueño: { horas: 7, calidad: "buena" },
      signosVitales: { presion: "120/80", pulso: 72 }
    };
  }

  async iniciarMonitoreo() {
    console.log("❤️ Iniciando monitoreo de salud continuo...");
    
    // Simular monitoreo continuo
    setInterval(() => {
      this.actualizarMetricas();
    }, 300000); // Cada 5 minutos
    
    console.log("✅ Monitoreo de salud activo");
    return true;
  }

  actualizarMetricas() {
    // Simular datos de sensores y wearables
    this.metricas = {
      actividad: Math.floor(Math.random() * 5000),
      sueño: { 
        horas: 6 + Math.random() * 3, 
        calidad: ["excelente", "buena", "regular"][Math.floor(Math.random() * 3)]
      },
      signosVitales: { 
        presion: `${110 + Math.floor(Math.random() * 20)}/${70 + Math.floor(Math.random() * 15)}`,
        pulso: 60 + Math.floor(Math.random() * 30)
      }
    };
    
    console.log("📊 Métricas actualizadas:", this.metricas.actividad + " pasos");
    return this.metricas;
  }

  detectarAnomalias() {
    // IA para detectar patrones anómalos
    const anomalias = [];
    
    if (this.metricas.pulso > 100) anomalias.push("Pulso elevado");
    if (this.metricas.actividad < 1000) anomalias.push("Baja actividad");
    
    if (anomalias.length > 0) {
      console.log("⚠️ Alertas de salud:", anomalias);
      return { alerta: true, anomalias };
    }
    
    return { alerta: false, mensaje: "Todo normal" };
  }

  generarReporteDiario() {
    return {
      fecha: new Date().toISOString().split(T)[0],
      metricas: this.metricas,
      recomendaciones: this.generarRecomendaciones()
    };
  }

  generarRecomendaciones() {
    const recs = [];
    if (this.metricas.actividad < 3000) recs.push("Camina 30 minutos hoy");
    if (this.metricas.sueño.horas < 7) recs.push("Intenta dormir más esta noche");
    
    return recs.length > 0 ? recs : ["¡Buen trabajo! Mantén tus hábitos"];
  }
}
