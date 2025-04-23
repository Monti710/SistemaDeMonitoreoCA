import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Datos simulados para cada tipo de sensor
const sensorData: Record<string, { fecha: string; valor: number }[]> = {
    "Temperatura": [
      { fecha: "2025-04-17", valor: 21 },
      { fecha: "2025-04-18", valor: 22 },
      { fecha: "2025-04-19", valor: 23 },
      { fecha: "2025-04-20", valor: 24 },
      { fecha: "2025-04-21", valor: 25 },
      { fecha: "2025-04-22", valor: 24 },
    ],
    "Humedad": [
      { fecha: "2025-04-17", valor: 45 },
      { fecha: "2025-04-18", valor: 50 },
      { fecha: "2025-04-19", valor: 55 },
      { fecha: "2025-04-20", valor: 60 },
      { fecha: "2025-04-21", valor: 58 },
      { fecha: "2025-04-22", valor: 53 },
    ],
    "Calidad del Aire": [
      { fecha: "2025-04-17", valor: 90 },
      { fecha: "2025-04-18", valor: 120 },
      { fecha: "2025-04-19", valor: 150 },
      { fecha: "2025-04-20", valor: 200 },
      { fecha: "2025-04-21", valor: 250 },
      { fecha: "2025-04-22", valor: 350 },
    ],
    "PM1.0": [
      { fecha: "2025-04-17", valor: 10 },
      { fecha: "2025-04-18", valor: 12 },
      { fecha: "2025-04-19", valor: 15 },
      { fecha: "2025-04-20", valor: 20 },
      { fecha: "2025-04-21", valor: 18 },
      { fecha: "2025-04-22", valor: 15 },
    ],
    "PM2.5": [
      { fecha: "2025-04-17", valor: 18 },
      { fecha: "2025-04-18", valor: 22 },
      { fecha: "2025-04-19", valor: 29 },
      { fecha: "2025-04-20", valor: 36 },
      { fecha: "2025-04-21", valor: 25 },
      { fecha: "2025-04-22", valor: 40 },
    ],
    "PM10": [
      { fecha: "2025-04-17", valor: 60 },
      { fecha: "2025-04-18", valor: 65 },
      { fecha: "2025-04-19", valor: 70 },
      { fecha: "2025-04-20", valor: 90 },
      { fecha: "2025-04-21", valor: 80 },
      { fecha: "2025-04-22", valor: 70 },
    ],
  };
  

const Historial = () => {
  const [sensor, setSensor] = useState("PM2.5");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const datos = sensorData[sensor] || [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📊 Historial de Sensores</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block font-semibold text-sm mb-1">Sensor</label>
          <select
            className="border rounded p-2"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
          >
            {Object.keys(sensorData).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Desde</label>
          <input
            type="date"
            className="border rounded p-2"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Hasta</label>
          <input
            type="date"
            className="border rounded p-2"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
      </div>

      {/* Gráfica */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Gráfica de {sensor}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datos} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabla de datos */}
      <div className="overflow-auto bg-white shadow-md rounded mt-6">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((d, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{d.fecha}</td>
                <td className="px-4 py-2">{d.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historial;
