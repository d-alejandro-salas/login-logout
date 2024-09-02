// src/contexts/LogeadoProvider.jsx

import { createContext, useReducer, useEffect } from 'react';

// Crear el contexto
export const LogeadoContext = createContext();

// Definir acciones
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// Reducer function
const logeadoReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logeado: true,
        userName: action.payload.userName,
      };
    case LOG_OUT:
      return {
        ...state,
        logeado: false,
        userName: null,
      };
    default:
      return state;
  }
};

// Estado inicial
const initialState = {
  logeado: JSON.parse(sessionStorage.getItem('logeado')) || false,
  userName: JSON.parse(sessionStorage.getItem('userName')) || null, // Carga el userName desde sessionStorage
};

// Crear el componente proveedor del contexto
export const LogeadoProvider = ({ children }) => {
  const [state, despachante] = useReducer(logeadoReducer, initialState);

  useEffect(() => {
    // Guardar el estado en sessionStorage cada vez que cambie
    sessionStorage.setItem('logeado', JSON.stringify(state.logeado));
    sessionStorage.setItem('userName', JSON.stringify(state.userName)); // Guarda el userName en sessionStorage
  }, [state.logeado, state.userName]);

  const logIn = (userName) => {
    despachante({ type: LOG_IN, payload: { userName } });
  };

  const logOut = () => {
    despachante({ type: LOG_OUT });
  };

  return (
    <LogeadoContext.Provider value={{ ...state, logIn, logOut }}>
      {children}
    </LogeadoContext.Provider>
  );
};