// src/contexts/LogeadoProvider.jsx

import { createContext, useEffect, useState } from 'react';

// Crear el contexto
export const LogeadoContext = createContext();

// Crear el componente proveedor del contexto
export const LogeadoProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [logeado, setLogeado] = useState(() => {
    // Cargar el estado inicial desde sessionStorage
    const savedLogeado = sessionStorage.getItem('logeado');
    return savedLogeado !== null ? JSON.parse(savedLogeado) : false;
  });
  
  useEffect(() => {
    // Guardar el estado en sessionStorage cada vez que cambie
    sessionStorage.setItem('logeado', JSON.stringify(logeado));
  }, [logeado]);

  return (
    <LogeadoContext.Provider value={{ logeado, setLogeado, userName, setUserName }}>
      {children}
    </LogeadoContext.Provider>
  );
};