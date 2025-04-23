import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen w-60 bg-blue-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">🧪 Lab Monitor</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:underline">🏠 Dashboard</Link></li>
        <li><Link to="/historial" className="hover:underline">📊 Historial</Link></li>
        <li><Link to="/alertas" className="hover:underline">🚨 Alertas</Link></li>
        <li><Link to="/config" className="hover:underline">⚙️ Configuración</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
