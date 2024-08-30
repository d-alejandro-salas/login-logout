// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './Home.jsx';
import "tailwindcss/tailwind.css";
import { LogeadoProvider } from './contexts/LogeadoProvider.jsx';
import { ActivatedPageProvider } from './contexts/ActivatedPageContext.jsx'; // Asegúrate de importar correctamente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogeadoProvider>
      <ActivatedPageProvider>
        <Home />
      </ActivatedPageProvider>
    </LogeadoProvider>
  </React.StrictMode>,
);
