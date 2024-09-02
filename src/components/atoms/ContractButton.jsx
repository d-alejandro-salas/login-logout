// src/components/atoms/ContractButton.jsx

import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContextProvider';

export const ContractButton = ({ city }) => {
  const [isContracted, setIsContracted] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  // Efecto para verificar si la ciudad está en favoritos al montar el componente
  useEffect(() => {
    const isFavorite = favorites.some((favorite) => favorite.id === city.id);
    setIsContracted(isFavorite);
  }, [favorites, city.id]); // Dependencias: se actualiza si favorites o city.id cambian

  const handleClick = () => {
    if (isContracted) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
    setIsContracted(!isContracted); // Actualiza el estado después de agregar o eliminar
  };

  return (
    <button
      onClick={handleClick}
      className={`p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
        isContracted
          ? 'bg-red-700 hover:bg-red-800 focus:ring-red-500'
          : 'bg-green-700 hover:bg-green-800 focus:ring-green-500'
      } text-white`}>
      {isContracted ? 'ANULAR' : 'CONTRATAR'}
    </button>
  );
};
