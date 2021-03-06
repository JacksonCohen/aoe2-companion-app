import React, { Dispatch, SetStateAction } from 'react';
import Civilization from '../Civilization';
import CivilizationInterface from '../../../interfaces/Civilization.interface';

interface Props {
  civilizations: CivilizationInterface[] | undefined;
  setCivs: Dispatch<SetStateAction<CivilizationInterface[]>>;
}

const CivilizationsList = ({ civilizations, setCivs }: Props) => {
  const handleChange = (id: number): void => {
    // the ! represents non null assertion operator telling the compiler that the expression cannot be null or undefined
    const civs: CivilizationInterface[] = [...civilizations!];

    for (const civ of civs) {
      if (civ.id === id) {
        civ.checked = !civ.checked;
      }
    }
    setCivs(civs);
  };

  return (
    <div className='civ__container'>
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
  );
};

export default CivilizationsList;
