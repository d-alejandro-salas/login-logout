// src/components/City.jsx

import { useParams } from 'react-router-dom';
import cities from "../utils/cities.js";

export const City = () => {
  const { cityId } = useParams(); // Obtiene cityId de la URL
  const city = cities.find(city => city.id === parseInt(cityId)); // Encuentra la ciudad por id

  if (!city) {
    return <p>City not found</p>;
  }

  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{city.name}</h1>
      <p className="text-gray-700 mb-4 text-base">{city.situation}</p>
      <div className="relative w-full h-[400px] mb-4 rounded overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </section>
  );
};
