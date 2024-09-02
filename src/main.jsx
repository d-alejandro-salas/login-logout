// src/main.jsx

import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Home.jsx';
import "tailwindcss/tailwind.css";

// Contextos
import { ThemeContextProvider, ThemeContext } from './contexts/ThemeContextProvider.jsx';
import { LogeadoProvider } from './contexts/LogeadoProvider.jsx';
import { FavoritesContextProvider } from './contexts/FavoritesContextProvider.jsx';

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white'}`}>
      <Home />
    </div>
  );
};

// Crear la raíz una sola vez
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el árbol de componentes
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LogeadoProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </LogeadoProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
