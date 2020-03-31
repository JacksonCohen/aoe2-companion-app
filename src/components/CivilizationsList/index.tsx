import React, { Fragment, useState, useEffect } from "react";
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

  const handleChange = (id: number) => {
    // the ! represents non null assertion operator telling the compiler that the expression cannot be null or undefined
    let civs = [...civilizations!];
    civs[id].checked = !civs[id].checked;
    setCivilizations(civs);
  };

  const clearAll = () => {
    let civs = [...civilizations!];
    civs.forEach(civ => {
      civ.checked = false;
    });

    setCivilizations(civs);
  };

  const selectAll = () => {
    let civs = [...civilizations!];
    civs.forEach(civ => {
      console.log(civ);
      civ.checked = true;
    });

    setCivilizations(civs);
  };

  const selectCiv = () => {
    const validCivs = [];

    for (const civ of civilizations!) {
      if (civ.checked) {
        validCivs.push(civ.id);
      }
    }
    console.log(
      civilizations![validCivs![Math.floor(Math.random() * validCivs!.length)]]
        .name
    );
    return civilizations![
      validCivs![Math.floor(Math.random() * validCivs!.length)]
    ];
  };

  return (
    <Fragment>
      <button onClick={selectAll}>Select all</button>
      <button onClick={clearAll}>Clear all</button>

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
                  checked={civ.checked}
                  handleChange={handleChange}
                />
              );
            })}
        </div>

        <div className="my-3 text-center">
          <button onClick={selectCiv}>Randomize!</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CivilizationsList;
