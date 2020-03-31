import React, { Fragment, useState, useEffect } from "react";
import CivilizationInterface from "../../interfaces/Civilization.interface";
import Civilization from "../Civilization";
import { civilizationData } from "../../data/civs";

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState<
    CivilizationInterface[] | undefined
  >([]);

  useEffect(() => {
    civilizationData.forEach(civ => {
      civ.checked = false;
    });
    setCivilizations(civilizationData);
  }, []);

  const handleChange = (id: number): void => {
    // the ! represents non null assertion operator telling the compiler that the expression cannot be null or undefined
    const civs = [...civilizations!];
    civs[id].checked = !civs[id].checked;
    setCivilizations(civs);
  };

  const selectOrClearAll = (checkedValue: boolean): void => {
    const civs = [...civilizations!];
    civs.forEach(civ => (civ.checked = checkedValue));
    setCivilizations(civs);
  };

  const selectCiv = () => {
    const validCivs: CivilizationInterface[] = civilizations!.filter(
      civ => civ.checked
    );

    return civilizations![
      validCivs![Math.floor(Math.random() * validCivs!.length)].id
    ];
  };

  return (
    <Fragment>
      <button onClick={() => selectOrClearAll(true)}>Select all</button>
      <button onClick={() => selectOrClearAll(false)}>Clear all</button>

      <div className="container civ-list">
        <div className="row">
          {civilizations &&
            civilizations.map((civ: CivilizationInterface) => {
              return (
                <Civilization
                  key={civ.id}
                  id={civ.id}
                  name={civ.name}
                  coat={civ.coatOfArms}
                  checked={civ.checked || false}
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
