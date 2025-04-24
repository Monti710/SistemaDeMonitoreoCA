import { useTheme } from "../context/ThemeContext";
import { useState } from "react";


const Configuracion = () => {
  const [notificaciones, setNotificaciones] = useState(true);
  const [frecuencia, setFrecuencia] = useState("5");
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">⚙️ Configuración del Sistema</h1>
      <p className="text-gray-600 text-sm dark:text-gray-300">
        Aquí puedes ajustar las preferencias de visualización y comportamiento del sistema.
      </p>

      <div className="space-y-4 bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow-md max-w-xl">
        {/* Notificaciones */}
        <div className="flex items-center justify-between">
          <label className="font-medium">Notificaciones por alertas</label>
          <input
            type="checkbox"
            className="scale-125 accent-blue-600"
            checked={notificaciones}
            onChange={() => setNotificaciones(!notificaciones)}
          />
        </div>

        {/* Modo oscuro */}
        <div className="flex items-center justify-between">
          <label className="font-medium">Tema oscuro</label>
          <input
            type="checkbox"
            className="scale-125 accent-blue-600"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>

        {/* Frecuencia */}
        <div>
          <label className="block font-medium mb-1">Frecuencia de actualización (minutos)</label>
          <select
            className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
            value={frecuencia}
            onChange={(e) => setFrecuencia(e.target.value)}
          >
            <option value="1">Cada 1 minuto</option>
            <option value="5">Cada 5 minutos</option>
            <option value="10">Cada 10 minutos</option>
            <option value="30">Cada 30 minutos</option>
          </select>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          💾 Guardar preferencias
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
