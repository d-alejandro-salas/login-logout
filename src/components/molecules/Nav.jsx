// src/components/molecules/Nav.jsx

import { NavLink, useLocation } from 'react-router-dom';
import { LoggingButton } from "../atoms/LoggingButton";
import { ModeButton } from "../atoms/ModeButton";

export const Nav = () => {
  const location = useLocation();

  return (<nav className="flex w-full bg-black p-2 uppercase text-white justify-between border-b border-white">

      <ul className="flex space-x-4 my-auto">
        <li>
          <NavLink 
            to="/cp"
            className={({ isActive }) =>
              location.pathname === '/cp' || location.pathname === '/' ? 'active' : undefined
            }>
            Capital y Patagonia
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/no">
            Norte y Este
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ruta">
            Ruta
          </NavLink>
        </li>
      </ul>
      <div>
        <ModeButton />
        <LoggingButton />
      </div>
    </nav>
  );
};
