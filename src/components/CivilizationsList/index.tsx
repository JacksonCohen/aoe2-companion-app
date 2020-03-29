import React, { useState, useEffect } from "react";
import CivilizationInterface from "../../interfaces/Civilization.interface";
import Civilization from "../Civilization";
import civilizationData from "../../data/civs.js";

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState([]);

  console.log(civilizationData, "civ data");

  useEffect(() => {
    // setCivilizations(civilizationData);
  });

  return (
    <div>
      {civilizationData.map((civ: CivilizationInterface) => {
        return <Civilization civ={civ.name} key={civ.id} />;
      })}
    </div>
  );
};

export default CivilizationsList;
