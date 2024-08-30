// src/contexts/ActivatedPageContext.jsx

import { createContext, useReducer } from 'react';

// Crear el contexto
export const ActivatedPageContext = createContext();

// Crear el proveedor del contexto
export const ActivatedPageProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    cP: true,
    nO: false,
    city: false,
    rute: false,
    cityId: null,  // Añadir cityId en el estado inicial
  };
  
  // Conmutador para manejar las acciones
  function conmutador(state, action) {
    switch (action.type) {
      case 'SHOW_cP':
        return { cP: true, nO: false, city: false, rute: false, cityId: null };
      case 'SHOW_nO':
        return { cP: false, nO: true, city: false, rute: false, cityId: null };
      case 'SHOW_RUTE':
        return { cP: false, nO: false, city: false, rute: true, cityId: null };
      case 'SHOW_CITY':
        return { cP: false, nO: false, city: true, rute: false, cityId: action.cityId }; // Actualizar cityId correctamente
      default:
        return state;
    }
  }

  // Usar useReducer para manejar el estado y despachante
  const [activePage, despachante] = useReducer(conmutador, initialState);

  return (
    <ActivatedPageContext.Provider value={{ activePage, despachante }}>
      {children}
    </ActivatedPageContext.Provider>
  );
};
