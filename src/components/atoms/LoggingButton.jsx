// src/components/atoms/LoggingButton.jsx

import { useContext } from 'react';
import { LogeadoContext } from '../../contexts/LogeadoProvider';

export const LoggingButton = ({ inputRef, isDisabled }) => {
  const { logeado, setLogeado, setUserName } = useContext(LogeadoContext);

  const handleClick = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (logeado) {
      // Si el usuario está logueado, hacemos logout
      setLogeado(false);
      setUserName(null);
    } else {
      // Si el usuario no está logueado, hacemos login
      setLogeado(true);
      if (inputRef.current) {
        setUserName(inputRef.current.value); // Actualiza el nombre de usuario
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
