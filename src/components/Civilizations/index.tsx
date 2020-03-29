import React from "react";
import CivilizationInterface from "../../interfaces/Civilization.interface";
import Civilization from "../Civilization";

const Civilizations = ({ data }: any) => {
  return (
    <div>
      {data.map((civ: CivilizationInterface) => {
        return <Civilization civ={civ.name} key={civ.id} />;
      })}
    </div>
  );
};

export default Civilizations;
