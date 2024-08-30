// src/pages/CP.jsx

import cities from "../utils/cities.js";
import {InfoButton} from "../components/atoms/InfoButton.jsx";
import { Fav } from "../components/atoms/Fav.jsx"; // Asegúrate de usar la importación con llaves

export const LandingPage = () => {
  let zone; // Definir zone con let para poder reasignarlo

  // Asignar el valor a zone
  if (window.location.pathname.length > 1) {
    zone = window.location.pathname.substring(1);
  } else {
    zone = "cp"; // Valor por defecto
  }

  return (
    <section className="my-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cities
        .filter(city => city.zone === zone)
        .map(city => (
          <div 
            key={city.id} 
            className="flex flex-col relative items-center justify-center border border-orange-600 rounded-xl bg-white hover:bg-yellow-100 p-4 shadow-md">
            <h1 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h1>
            <p className="text-gray-700 mb-2">{city.situation}</p>
            <img 
              src={city.image} 
              alt={city.name} 
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <div className="flex justify-between w-full">
              <InfoButton cityId={city.id} />
              <Fav />
            </div>
          </div>
        ))}
    </section>
  );
};