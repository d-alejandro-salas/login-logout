//scr/components/City.jsx

import { useParams, useNavigate } from 'react-router-dom';
import cities from "../utils/cities.js";
import { ContractButton } from './atoms/ContractButton.jsx';

export const City = () => {
  const { cityId } = useParams(); // Obtiene cityId de la URL
  const city = cities.find(city => city.id === parseInt(cityId)); // Encuentra la ciudad por id
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <section className="flex bg-transparent flex-col font-bold items-center max-w-2xl mx-auto p-6 rounded-lg border border-white">
      <h1 className="text-3xl mb-4">{city.name}</h1>      
      <p className="mb-4 text-base">{city.situation}</p>
      <div className="w-full h-[400px] mb-4 rounded overflow-hidden relative">
        <div className="absolute top-5 left-4 text-white bg-black px-6 py-4 text-2xl">
          {city.price}$
        </div>
        <div className="absolute top-5 right-4 flex gap-4">
          <ContractButton city={city} />
          <button
            onClick={() => navigate(-1)} // Función anónima para retrasar la ejecución
            className="bg-orange-500 text-white p-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
            VOLVER
          </button>
        </div>
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover rounded"/>
      </div>
    </section>
  );
};
