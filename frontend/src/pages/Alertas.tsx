import { useState } from "react";

const nivelColor = {
  bajo: "bg-green-100 text-green-800 border-green-400 dark:bg-green-900 dark:text-green-200 dark:border-green-600",
  moderado: "bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-600",
  alto: "bg-orange-100 text-orange-800 border-orange-400 dark:bg-orange-900 dark:text-orange-100 dark:border-orange-600",
  crítico: "bg-red-100 text-red-800 border-red-400 dark:bg-red-900 dark:text-red-200 dark:border-red-600",
};

const Alertas = () => {
  const [alertas, setAlertas] = useState([
    {
      sensor: "PM2.5",
      valor: 40,
      fecha: "2025-04-22",
      hora: "10:30",
      nivel: "alto",
      mensaje:
        "Nivel peligroso de partículas finas. Se recomienda el uso de mascarilla y evitar la actividad física.",
      atendida: false,
    },
    {
      sensor: "Temperatura",
      valor: 31,
      fecha: "2025-04-22",
      hora: "09:45",
      nivel: "moderado",
      mensaje: "La temperatura está fuera del rango óptimo. Revisar la ventilación del laboratorio.",
      atendida: false,
    },
    {
      sensor: "Calidad del Aire",
      valor: 380,
      fecha: "2025-04-21",
      hora: "17:20",
      nivel: "crítico",
      mensaje: "Gases contaminantes en niveles muy elevados. Se recomienda evacuar o ventilar urgentemente.",
      atendida: false,
    },
  ]);

  const marcarComoAtendida = (index: number) => {
    const nuevas = [...alertas];
    nuevas[index].atendida = true;
    setAlertas(nuevas);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🚨 Alertas Activas</h1>

      {alertas.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No hay alertas activas por el momento.</p>
      ) : (
        <div className="space-y-4">
          {alertas.map((alerta, index) => (
            <div
              key={index}
              className={`border-l-4 p-4 shadow-md rounded-md bg-white dark:bg-gray-800 ${nivelColor[alerta.nivel as keyof typeof nivelColor]}`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  🔔 {alerta.sensor} fuera de rango ({alerta.valor})
                </h2>
                <span className="text-sm font-medium opacity-60">
                  {alerta.fecha} {alerta.hora}
                </span>
              </div>
              <p className="mt-2 text-sm">{alerta.mensaje}</p>

              {!alerta.atendida ? (
                <button
                  onClick={() => marcarComoAtendida(index)}
                  className="mt-3 inline-block bg-blue-600 text-white px-3 py-1 text-xs rounded hover:bg-blue-700 transition"
                >
                  ✅ Marcar como atendida
                </button>
              ) : (
                <span className="mt-3 inline-block text-sm text-green-700 font-semibold dark:text-green-300">
                  ✔️ Atendida
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alertas;
