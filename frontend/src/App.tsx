import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Historial from './pages/Historial';
import Alertas from './pages/Alertas';
import Configuracion from './pages/Configuracion';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/alertas" element={<Alertas />} />
            <Route path="/config" element={<Configuracion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
