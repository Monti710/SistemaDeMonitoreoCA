type SensorExtraInfo = {
    description: string;
    rangeInfo: string;
    recommendation: string;
  };
  
  export const sensorInfoMap: Record<string, SensorExtraInfo> = {
    "Temperatura": {
      description: "Indica qué tan caliente o frío está el ambiente.",
      rangeInfo: "Bueno: 18–26 °C, Moderado: 15–17 °C o 27–30 °C, Malo: <15 °C o >30 °C",
      recommendation: "Evita cambios bruscos de temperatura en el laboratorio.",
    },
    "Humedad": {
      description: "Cantidad de vapor de agua presente en el aire.",
      rangeInfo: "Bueno: 30–60%, Moderado: 20–29% o 61–70%, Malo: <20% o >70%",
      recommendation: "Usa deshumidificadores si es demasiado alta.",
    },
    "Calidad del Aire": {
      description: "Nivel general de gases nocivos en el ambiente.",
      rangeInfo: "Bueno: 0–100 AQI, Moderado: 101–300 AQI, Malo: >300 AQI",
      recommendation: "Ventila el área o limita el tiempo de exposición.",
    },
    "PM1.0": {
      description: "Partículas ultrafinas suspendidas en el aire.",
      rangeInfo: "Bueno: 0–12 µg/m³, Moderado: 13–35 µg/m³, Malo: >35 µg/m³",
      recommendation: "Evita actividades físicas intensas si el nivel es alto.",
    },
    "PM2.5": {
      description: "Partículas finas que pueden penetrar en los pulmones.",
      rangeInfo: "Bueno: 0–12 µg/m³, Moderado: 13–35 µg/m³, Malo: >35 µg/m³",
      recommendation: "Ventila o filtra el aire cuando supere los 35 µg/m³.",
    },
    "PM10": {
      description: "Partículas más grandes pero aún peligrosas.",
      rangeInfo: "Bueno: 0–50 µg/m³, Moderado: 51–150 µg/m³, Malo: >150 µg/m³",
      recommendation: "Evita permanecer en el área sin protección respiratoria.",
    }
  };
  