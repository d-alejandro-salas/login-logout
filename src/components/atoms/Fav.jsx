// src/components/atoms/Fav.jsx

import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContextProvider';

export const Fav = ({ city }) => {
  const [isContracted, setIsContracted] = useState(false); // Definir estado local
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    // Verificar si la ciudad está en favoritos al montar el componente
    const isFavorite = favorites.some((favorite) => favorite.id === city.id);
    setIsContracted(isFavorite); // Actualizar estado basado en la verificación
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
    <div 
      onClick={handleClick}
      className={`rounded-full px-3 py-1 text-green-700 cursor-pointer ${
        isContracted
          ? 'bg-green-700'
          : 'hidden'
      } `}>
      {isContracted ? 'C' : 'N'}
    </div>
  );
};
