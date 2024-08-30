//src/components/molecules/Nav.jsx

import { NavLink } from 'react-router-dom';
import {LoggingButton} from "../atoms/LoggingButton";
import { useContext } from "react";
import { ActivatedPageContext } from "../../contexts/ActivatedPageContext.jsx"; 

export const Nav = () => {
  const { despachante } = useContext(ActivatedPageContext); 

  return (
    <nav className="flex w-full bg-black p-2 uppercase text-white justify-between">
      <ul className="flex space-x-4 my-auto">
        <li>
          <NavLink 
            to="/cp" >
            Capital y Patagonia
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/no" >
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
      <LoggingButton />
    </nav>
  );
}