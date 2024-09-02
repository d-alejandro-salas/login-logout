// src/Home.jsx

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { LogeadoContext } from './contexts/LogeadoProvider';
import { Login } from './pages/Login';
import { Nav } from './components/molecules/Nav';
import { LandingPage } from './pages/LandingPage';
import { City } from './components/City';
import { Rute } from './components/Rute';

export const Home = () => {
  const { logeado } = useContext(LogeadoContext);

  return (
    <BrowserRouter>
      {logeado && <Nav />} {/* Renderiza la navegación solo si el usuario está logueado */}
      <Routes>
        {!logeado ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cp" element={<LandingPage />} />
            <Route path="/no" element={<LandingPage />} />
            <Route path="/:cityId" element={<City />} /> {/* Ruta para detalles de la ciudad */}
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/ruta" element={<Rute />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
