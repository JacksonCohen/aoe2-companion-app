import React, { Fragment, useState, useEffect } from 'react';
import CivilizationInterface from '../../interfaces/Civilization.interface';
import Civilization from '../Civilization';
import RandomizerModal from '../RandomizerModal';
import { civilizationData } from '../../data/civs';

import './_CivilizationsList.scss';

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState<CivilizationInterface[] | undefined>([]);
  const [selectedRandomCiv, setSelectedRandomCiv] = useState({});

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

  const selectCiv = (): void => {
    const validCivs: CivilizationInterface[] = civilizations!.filter(civ => civ.checked);

    validCivs.length
      ? setSelectedRandomCiv(
          civilizations![validCivs![Math.floor(Math.random() * validCivs!.length)].id] // select one of the checked civilizations randomly
        )
      : undefined;
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
  };

  return (
    <Fragment>
      <div className='select-options'>
        <button onClick={() => selectOrClearAll(true)}>Select all</button>
        <button onClick={() => selectOrClearAll(false)}>Clear all</button>
      </div>

      <div className='civ-list'>
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

      <div className='randomizer'>
        <button onClick={selectCiv}>Randomize!</button>
      </div>

      {/* if the randomizer has been used, open the modal */}
      {!!Object.keys(selectedRandomCiv).length ? (
        <RandomizerModal civilization={selectedRandomCiv} closeModal={closeModal} />
      ) : null}
    </Fragment>
  );
};

export default CivilizationsList;
