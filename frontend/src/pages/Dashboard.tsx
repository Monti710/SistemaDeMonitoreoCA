import SensorCard from "../components/SensorCard";
import { getStatusByType } from "../utils/getStatusByType";
import { sensorInfoMap } from "../data/sensorInfo";

function Dashboard() {
  const sensores = [
    { name: "Temperatura", value: 24, unit: "°C" },
    { name: "Humedad", value: 60, unit: "%" },
    { name: "Calidad del Aire", value: 350, unit: "AQI" },
    { name: "PM1.0", value: 15, unit: "µg/m³" },
    { name: "PM2.5", value: 40, unit: "µg/m³" },
    { name: "PM10", value: 70, unit: "µg/m³" },
  ];

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sensores.map((sensor) => (
        <SensorCard
          key={sensor.name}
          name={sensor.name}
          value={sensor.value}
          unit={sensor.unit}
          status={getStatusByType(sensor.name, sensor.value)}
          extra={sensorInfoMap[sensor.name]}
        />
      ))}
    </div>
  );
}

export default Dashboard;
