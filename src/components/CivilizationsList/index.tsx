import React, { useState, useEffect } from "react";
import CivilizationInterface from "../../interfaces/Civilization.interface";
import Civilization from "../Civilization";
import civilizationData from "../../data/civs.js";

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState<
    CivilizationInterface[] | undefined
  >([]);

  useEffect(() => {
    setCivilizations(civilizationData);
  });

  const handleClick = (id: number) => {
    let civs = [...civilizations!];
    civs[id].checked = !civs[id].checked;
    console.log(civs[id], civs[id].checked, civs);
    setCivilizations(civs);
  };

  return (
    <div className="container civ-list">
      <div className="row">
        {civilizations &&
          civilizations.map((civ: CivilizationInterface) => {
            return (
              <Civilization
                key={civ.id}
                id={civ.id}
                name={civ.name}
                coat={civ.coat_of_arms}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CivilizationsList;
