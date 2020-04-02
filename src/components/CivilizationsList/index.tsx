import React, { Fragment, useState, useEffect } from 'react';
import CivilizationInterface from '../../interfaces/Civilization.interface';
import Civilization from '../Civilization';
import Dropdown from '../Dropdown';
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
    const civs: CivilizationInterface[] = [...civilizations!];
    civs[id].checked = !civs[id].checked;
    setCivilizations(civs);
  };

  const selectOrClearAll = (checkedValue: boolean): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    civs.forEach(civ => (civ.checked = checkedValue));
    setCivilizations(civs);
  };

  const selectCiv = (): void => {
    const validCivs: CivilizationInterface[] = civilizations!.filter(civ => civ.checked);

    validCivs.length
      ? setSelectedRandomCiv(
          civilizations![validCivs![Math.floor(Math.random() * validCivs!.length)].id] // select one of the checked civilizations randomly
        )
      : alert('Select one or more random civilizations to receive a random selection.'); // alert if
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
  };

  const selectChosenCriteria = (criteria: string, option: string): void => {
    const civs: CivilizationInterface[] = [...civilizations!];

    civs.forEach(civ => {
      if (civ[criteria].includes(option) || civ[criteria] === option) {
        civ.checked = !civ.checked;
      }
    });

    setCivilizations(civs);
  };

  return (
    <Fragment>
      <div className='button__select-options'>
        <ul id='dropdown' className='dropdown'>
          <li>
            Criteria
            <ul>
              <Dropdown
                criteria='geographicRegion'
                label='Region'
                options={['Africa', 'Asia', 'Europe', 'The Americas']}
                selectChosenCriteria={selectChosenCriteria}
              />
              <Dropdown
                criteria='expansion'
                label='Expansion'
                options={[
                  'The Age of Kings',
                  'The Conquerors',
                  'The Forgotten',
                  'The African Kingdoms',
                  'Fall of the Rajas',
                  'The Last Khans'
                ]}
                selectChosenCriteria={selectChosenCriteria}
              />
            </ul>
          </li>
        </ul>

        <button onClick={() => selectOrClearAll(true)}>Select all</button>
        <button onClick={() => selectOrClearAll(false)}>Clear all</button>
      </div>

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
