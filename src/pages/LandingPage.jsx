// src/pages/LandingPage.jsx

import { useLocation } from 'react-router-dom';
import cities from "../utils/cities.js";
import { InfoButton } from "../components/atoms/InfoButton.jsx";
import { Fav } from "../components/atoms/Fav.jsx";

export const LandingPage = () => {
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
            className="bg-transparent flex flex-col relative items-center justify-center border border-orange-600 rounded-xl bg-white hover:bg-green-100 p-4 shadow-md">
            <h1 className="mb-2">{city.name}</h1>
            <p className="mb-2">{city.situation}</p>
            <img 
              src={city.image} 
              alt={city.name} 
              className="w-full h-40 object-cover mb-2 rounded"/>
            <div className="flex justify-between w-full items-center">
              <InfoButton cityId={city.id} />
              <Fav city={city}/>
            </div>
          </div>
        ))}
    </section>
  );
};
