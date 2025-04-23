export function getStatusByType(name: string, value: number): "good" | "moderate" | "bad" {
    switch (name) {
      case "Temperatura":
        if (value >= 18 && value <= 26) return "good";
        if ((value >= 15 && value < 18) || (value > 26 && value <= 30)) return "moderate";
        return "bad";
  
      case "Humedad":
        if (value >= 30 && value <= 60) return "good";
        if ((value >= 20 && value < 30) || (value > 60 && value <= 70)) return "moderate";
        return "bad";
  
      case "Calidad del Aire":
      case "Gases Nocivos":
        if (value <= 100) return "good";
        if (value <= 300) return "moderate";
        return "bad";
  
      case "PM1.0":
      case "PM2.5":
        if (value <= 12) return "good";
        if (value <= 35) return "moderate";
        return "bad";
  
      case "PM10":
        if (value <= 50) return "good";
        if (value <= 150) return "moderate";
        return "bad";
  
      default:
        return "moderate"; // por si acaso
    }
  }
    // Esta función devuelve el estado de un sensor basado en su tipo y valor.
    // Los estados posibles son "good", "moderate" y "bad".
    // Se basa en los estándares de calidad del aire y temperatura/humedad.
    // Temperatura: 18-26°C (good), 15-18°C o 26-30°C (moderate), fuera de estos rangos (bad)
    // Humedad: 30-60% (good), 20-30% o 60-70% (moderate), fuera de estos rangos (bad)
    // Calidad del Aire: <=100 (good), <=300 (moderate), >300 (bad)
    // PM1.0: <=12 (good), <=35 (moderate), >35 (bad)
    // PM2.5: <=12 (good), <=35 (moderate), >35 (bad)
    // PM10: <=50 (good), <=150 (moderate), >150 (bad)  