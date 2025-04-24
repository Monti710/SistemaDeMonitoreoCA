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

// Datos simulados con hora
const sensorData: Record<string, { fecha: string; valor: number; hora: string }[]> = {
  "Temperatura": [
    { fecha: "2025-04-17", valor: 21, hora: "08:00" },
    { fecha: "2025-04-18", valor: 22, hora: "08:30" },
    { fecha: "2025-04-19", valor: 27, hora: "09:00" },
    { fecha: "2025-04-20", valor: 24, hora: "09:30" },
    { fecha: "2025-04-21", valor: 25, hora: "10:00" },
    { fecha: "2025-04-22", valor: 24, hora: "10:30" },
  ],
  "Humedad": [
    { fecha: "2025-04-17", valor: 45, hora: "08:00" },
    { fecha: "2025-04-18", valor: 50, hora: "08:30" },
    { fecha: "2025-04-19", valor: 55, hora: "09:00" },
    { fecha: "2025-04-20", valor: 60, hora: "09:30" },
    { fecha: "2025-04-21", valor: 58, hora: "10:00" },
    { fecha: "2025-04-22", valor: 53, hora: "10:30" },
  ],
  "Calidad del Aire": [
    { fecha: "2025-04-17", valor: 90, hora: "08:00" },
    { fecha: "2025-04-18", valor: 120, hora: "08:30" },
    { fecha: "2025-04-19", valor: 150, hora: "09:00" },
    { fecha: "2025-04-20", valor: 200, hora: "09:30" },
    { fecha: "2025-04-21", valor: 250, hora: "10:00" },
    { fecha: "2025-04-22", valor: 350, hora: "10:30" },
  ],
  "PM1.0": [
    { fecha: "2025-04-17", valor: 10, hora: "08:00" },
    { fecha: "2025-04-18", valor: 12, hora: "08:30" },
    { fecha: "2025-04-19", valor: 15, hora: "09:00" },
    { fecha: "2025-04-20", valor: 20, hora: "09:30" },
    { fecha: "2025-04-21", valor: 18, hora: "10:00" },
    { fecha: "2025-04-22", valor: 15, hora: "10:30" },
  ],
  "PM2.5": [
    { fecha: "2025-04-17", valor: 18, hora: "08:00" },
    { fecha: "2025-04-18", valor: 22, hora: "08:30" },
    { fecha: "2025-04-19", valor: 29, hora: "09:00" },
    { fecha: "2025-04-20", valor: 36, hora: "09:30" },
    { fecha: "2025-04-21", valor: 25, hora: "10:00" },
    { fecha: "2025-04-22", valor: 40, hora: "10:30" },
  ],
  "PM10": [
    { fecha: "2025-04-17", valor: 60, hora: "08:00" },
    { fecha: "2025-04-18", valor: 65, hora: "08:30" },
    { fecha: "2025-04-19", valor: 70, hora: "09:00" },
    { fecha: "2025-04-20", valor: 90, hora: "09:30" },
    { fecha: "2025-04-21", valor: 80, hora: "10:01" },
    { fecha: "2025-04-22", valor: 70, hora: "10:30" },
  ],
};

const Historial = () => {
  const [sensor, setSensor] = useState("PM2.5");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const datos = sensorData[sensor] || [];

  const datosFiltrados = datos.filter((d) => {
    const fecha = new Date(d.fecha);
    const desde = fechaInicio ? new Date(fechaInicio) : null;
    const hasta = fechaFin ? new Date(fechaFin) : null;
    return (!desde || fecha >= desde) && (!hasta || fecha <= hasta);
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">📊 Historial de Sensores</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">Sensor</label>
          <select
            className="border rounded p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
          >
            {Object.keys(sensorData).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">Desde</label>
          <input
            type="date"
            className="border rounded p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">Hasta</label>
          <input
            type="date"
            className="border rounded p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
      </div>

      {/* Gráfica */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Gráfica de {sensor}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datosFiltrados} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabla scrollable */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded mt-6 h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200 dark:scrollbar-thumb-blue-700 dark:scrollbar-track-gray-800">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Hora</th>
              <th className="px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.length > 0 ? (
              datosFiltrados.map((d, index) => (
                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="px-4 py-2">{d.fecha}</td>
                  <td className="px-4 py-2">{d.hora}</td>
                  <td className="px-4 py-2">{d.valor}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-2 text-center text-gray-500 dark:text-gray-400">
                  No hay datos en este rango de fechas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historial;
