// src/pages/LandingPage.jsx

import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import cities from "../utils/cities.js";
import { InfoButton } from "../components/atoms/InfoButton.jsx";
import { Fav } from "../components/atoms/Fav.jsx";
import { ThemeContext } from '../contexts/ThemeContextProvider.jsx';

export const LandingPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();
  let zone;

  // Asignar el valor a zone
  if (location.pathname.length > 1) {
    zone = location.pathname.substring(1);
  } else {
    zone = "cp"; // Valor por defecto
  }

  return (
    <section className="bg-transparent my-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cities
        .filter(city => city.zone === zone)
        .map(city => (
          <div 
            key={city.id} 
            className={`mb-2 ${darkMode 
              ? 'bg-black text-white hover:bg-gray-800'  // Modo oscuro: hover más oscuro
              : 'bg-white text-black hover:bg-gray-200'  // Modo claro: hover más claro
            } flex flex-col relative items-center justify-between border border-orange-600 rounded-xl p-4 shadow-md h-full`}
          >
            <h1 className="flex-grow">{city.name}</h1><div>
            <p className="mb-2">{city.situation}</p>
            <img 
              src={city.image} 
              alt={city.name} 
              className="w-full h-40 object-cover mb-2 rounded"/>
            <div className="flex justify-between w-full items-center mt-auto">
              <InfoButton cityId={city.id} />
              <Fav city={city}/>
            </div>
          </div></div>
        ))}
    </section>
  );
};
