// src/components/molecules/Nav.jsx

import { NavLink, useLocation } from 'react-router-dom';
import { LoggingButton } from "../atoms/LoggingButton";
import { ModeButton } from "../atoms/ModeButton";

export const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col md:flex-row w-full bg-black p-2 uppercase text-white justify-between border-b border-white">
      <ul className="flex flex-col md:flex-row md:space-x-4 my-auto space-y-2 md:space-y-0">
        <li>
          <NavLink
            to="/cp"
            className={({ isActive }) =>
              location.pathname === '/cp' || location.pathname === '/' ? 'text-yellow-400' : 'text-white'
            }>
            Capital y Patagonia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/no"
            className={({ isActive }) =>
              location.pathname === '/no' ? 'text-yellow-400' : 'text-white'
            }>
            Norte y Este
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ruta"
            className={({ isActive }) =>
              location.pathname === '/ruta' ? 'text-yellow-400' : 'text-white'
            }>
            Ruta
          </NavLink>
        </li>
      </ul>
      <div className="flex space-x-2 mt-2 md:mt-0">
        <ModeButton />
        <LoggingButton />
      </div>
    </nav>
  );
};
