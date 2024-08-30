// src/components/Main.jsx

import { useContext } from "react";
import cities from "../utils/cities.js";
import { ActivatedPageContext } from "../contexts/ActivatedPageContext.jsx"; // Importación correcta
import Rute from "./Rute.jsx";
import InfoButton from "./atoms/InfoButton.jsx";

export const Main = () => {
  const { activePage } = useContext(ActivatedPageContext); // Acceso a activePage

  // Determina la zona activa según el estado
  const activeZone = activePage.cP ? "cp" : activePage.nO ? "no" : "rute";

  return (
    <>
      {activeZone !== "rute" ? (
        <section className="my-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities
            .filter(city => city.zone === activeZone)
            .map(city => (
              <div 
                key={city.id} 
                className="flex flex-col relative items-center justify-center relative border border-orange-600 rounded-xl bg-white hover:bg-yellow-100 p-4 shadow-md">
                <h1 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h1>
                <p className="text-gray-700 mb-2">{city.situation}</p>
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <InfoButton />
              </div>
            ))}
        </section>
      ) : (
        <Rute />
      )}
    </>
  );
};

export default Main;
