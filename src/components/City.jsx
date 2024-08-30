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
    <section className="my-4 mx-4 p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{city.name}</h1>
      <p className="text-gray-700 mb-4">{city.situation}</p>
      <img 
        src={city.image} 
        alt={city.name} 
        className="w-full h-60 object-cover mb-4 rounded"
      />
      {/* Aquí puedes agregar más detalles de la ciudad según lo necesario */}
    </section>
  );
};
