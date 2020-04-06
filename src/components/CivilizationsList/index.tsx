import React, { Fragment, useState, useEffect } from 'react';
import CivilizationInterface from '../../interfaces/Civilization.interface';
import Civilization from '../Civilization';
import RandomizerHeader from '../RandomizerHeader';
import RandomizerModal from '../RandomizerModal';
import { civilizationData } from '../../data/civs';

import './_CivilizationsList.scss';

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState<CivilizationInterface[] | undefined>([]);
  const [selectedRandomCiv, setSelectedRandomCiv] = useState({});

  useEffect((): void => {
    civilizationData.forEach((civ: CivilizationInterface) => {
      civ.checked = false;
    });
    setCivilizations(civilizationData);
  }, []);

  const sortCivilizations = (method: string): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    if (method === 'alphabetical') {
      civs.sort((a: CivilizationInterface, b: CivilizationInterface) => (a.name < b.name ? -1 : 1));
      setCivilizations(civs);
    } else if (method === 'expansion') {
      const order: string[] = [
        'The Age of Kings',
        'The Conquerors',
        'The Forgotten',
        'The African Kingdoms',
        'Rise of the Rajas',
        'The Last Khans',
      ];
      civs!.sort(
        (a: CivilizationInterface, b: CivilizationInterface) =>
          order.indexOf(a.expansion) - order.indexOf(b.expansion)
      );
      setCivilizations(civs);
    }
  };

  const handleChange = (id: number): void => {
    // the ! represents non null assertion operator telling the compiler that the expression cannot be null or undefined
    const civs: CivilizationInterface[] = [...civilizations!];

    for (let i = 0; i < civs.length; i++) {
      if (civs[i].id === id) {
        civs[i].checked = !civs[i].checked;
      }
    }
    setCivilizations(civs);
  };

  const selectOrClearAll = (checkedValue: boolean): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    civs.forEach((civ: CivilizationInterface) => (civ.checked = checkedValue));
    setCivilizations(civs);
  };

  const selectCiv = (): void => {
    const validCivs: CivilizationInterface[] = civilizations!.filter((civ) => civ.checked);

    validCivs.length
      ? setSelectedRandomCiv(validCivs[Math.floor(Math.random() * validCivs!.length)])
      : alert('Select one or more random civilizations to receive a random selection.'); // alert if
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
  };

  const selectChosenCriteria = (criteria: string, option: string): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    civs.forEach((civ) => {
      if (civ[criteria].includes(option) || civ[criteria] === option) {
        civ.checked = !civ.checked;
      }
    });
    setCivilizations(civs);
  };

  return (
    <Fragment>
      <RandomizerHeader
        sortCivilizations={sortCivilizations}
        selectChosenCriteria={selectChosenCriteria}
        selectOrClearAll={selectOrClearAll}
      />

      <section className='section__civ-list'>
        <div>
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
      </section>

      <div className='button__randomizer'>
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
