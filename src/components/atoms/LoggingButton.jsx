// src/components/atoms/LoggingButton.jsx

import { useContext } from 'react';
import { LogeadoContext } from '../../contexts/LogeadoProvider';

export const LoggingButton = ({ inputRef, isDisabled }) => {
  const { logeado, logIn, logOut } = useContext(LogeadoContext); // Usamos las nuevas funciones

  const handleClick = (e) => {
    e.preventDefault();

    if (logeado) {
      logOut(); // Llamamos a logOut en lugar de setLogeado(false)
    } else {
      if (inputRef.current) {
        logIn(inputRef.current.value); // Pasamos el nombre de usuario como payload al hacer logIn
        console.log(inputRef.current.value);
      }
    }
  }

  return (
    <button 
      onClick={handleClick}
      type="submit"
      disabled={isDisabled}
      className={`p-3 font-bold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 text-white'}`}
    >
      {logeado ? 'LOG OUT' : 'LOG IN'}
    </button>
  );
};