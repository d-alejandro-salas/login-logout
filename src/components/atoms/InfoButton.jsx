// src/components/atoms/InfoButton.jsx

import { NavLink } from 'react-router-dom';

export const InfoButton = ({ cityId }) => {
    return (
        <NavLink 
            to={`/${cityId}`} // Ruta con cityId
            className="bottom-4 left-4 bg-green-700 text-white p-3 rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            More info
        </NavLink>
    );
};
