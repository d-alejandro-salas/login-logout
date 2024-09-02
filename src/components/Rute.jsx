// src/components/Rute.jsx

import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContextProvider';
import { LogeadoContext } from '../contexts/LogeadoProvider'; // Importa el contexto LogeadoContext
import { useNavigate } from 'react-router-dom';

export const Rute = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext); // Obtén removeFavorite del contexto
  const { userName } = useContext(LogeadoContext); // Obtén userName del contexto LogeadoContext
  const navigate = useNavigate(); // Importa el hook para la navegación

  const handleNavigate = (path) => {
    navigate(path); // Navega a la ruta especificada
  };

  // Calcula el total a pagar usando reduce
  const totalToPay = favorites.reduce((acc, favorite) => acc + favorite.price, 0);

  return (
    <div className='ml-4 mt-4 text-3xl'>
      <h1>Lugares a visitar:</h1><br/>
      {favorites.length === 0 ? (
        <p>
          (Todavía no has contratado ninguna actividad<br />
          Haz click en{' '}
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => handleNavigate('../cp')}>
            Capital y Patagonia
          </button>{' '}
          o{' '}
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => handleNavigate('../no')}>
            Norte y Este
          </button>{' '}
          para ver nuestras ofertas)
        </p>
      ) : (
        <div>
          {favorites.map((favorite) => (
            <div key={favorite.id} className="mb-2 text-lg">
              <button 
                className='bg-red-500 text-white p-1 rounded' // Cambiado a color válido y añadido padding
                onClick={() => {
                  removeFavorite(favorite); // Usa favorite en lugar de city
                }}>
                Anular
              </button>{' '}
              {favorite.name}{' '}${favorite.price}
            </div>
          ))}
        </div>
      )}<br/>
      <p><b>Total a pagar: ${totalToPay}</b></p>
      <p>Cliente: {userName}</p> {/* Muestra el nombre del usuario */}
    </div>
  );
};
