type SensorExtraInfo = {
  description: string;
  rangeInfo: string;
  recommendation: string;
};

type SensorCardProps = {
  name: string;
  value: number;
  unit: string;
  status: "good" | "moderate" | "bad";
  extra?: SensorExtraInfo;
};

const SensorCard: React.FC<SensorCardProps> = ({ name, value, unit, status, extra }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "good": return "bg-green-100 text-green-800 border-green-300";
      case "moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "bad": return "bg-red-100 text-red-800 border-red-300";
    }
  };

  return (
    <div className={`p-6 rounded-xl border-2 shadow-md ${getStatusStyle()}`}>
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-4xl font-extrabold">
        {value} <span className="text-lg">{unit}</span>
      </p>
      <span className="inline-block mt-2 px-3 py-1 bg-white border rounded-full text-xs font-semibold">
        {status.toUpperCase()}
      </span>

      {extra && (
        <div className="mt-4 text-sm opacity-80 space-y-1">
          <p><strong>📘 Qué es:</strong> {extra.description}</p>
          <p><strong>📊 Rango:</strong> {extra.rangeInfo}</p>
          <p><strong>💡 Consejo:</strong> {extra.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default SensorCard;
