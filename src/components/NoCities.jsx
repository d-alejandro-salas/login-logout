//scr/components/NoCities.jsx

import { useContext } from "react";
import { ActivatedPageContext } from "../contexts/ActivatedPageContext.jsx";
import Rute from "../components/Rute.jsx";
import City from "../components/City.jsx";

const NoCities = () => {
  const { activePage } = useContext(ActivatedPageContext);

  const activeZone = activePage.cP ? "cp" : activePage.nO ? "no" : activePage.city ? "city" : "rute";

  return (
    <>
      {activeZone === "city" ? (
        <City />
      ) : (
        <Rute />
      )}
    </>
  );
};

export default NoCities;
