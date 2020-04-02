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
      : undefined;
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
  };

  const sortBy = (criteria: string, specifier: string) => {
    const civs: CivilizationInterface[] = [...civilizations!];

    civs.forEach(civ => {
      if (civ[criteria].includes(specifier) || civ[criteria] === specifier) {
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
            Sort by
            <ul>
              <li>
                Region
                <ul>
                  <li>
                    <a onClick={() => sortBy('geographicRegion', 'Africa')} href='#'>
                      Africa
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('geographicRegion', 'Asia')} href='#'>
                      Asia
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('geographicRegion', 'Europe')} href='#'>
                      Europe
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('geographicRegion', 'The Americas')} href='#'>
                      The Americas
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Expansion
                <ul>
                  <li>
                    <a onClick={() => sortBy('expansion', 'The Age of Kings')} href='#'>
                      The Age of Kings
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('expansion', 'The Conquerors')} href='#'>
                      The Conquerors
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('expansion', 'The Forgotten')} href='#'>
                      The Forgotten
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('expansion', 'The African Kingdoms')} href='#'>
                      The African Kingdoms
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('expansion', 'Rise of the Rajas')} href='#'>
                      Rise of the Rajas
                    </a>
                  </li>
                  <li>
                    <a onClick={() => sortBy('expansion', 'The Last Khans')} href='#'>
                      The Last Khans
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Tier
                <ul>
                  <li>
                    <a href='#'>Tier S</a>
                  </li>
                  <li>
                    <a href='#'>Tier A</a>
                  </li>
                  <li>
                    <a href='#'>Tier B</a>
                  </li>
                  <li>
                    <a href='#'>Tier C</a>
                  </li>
                </ul>
              </li>
              <li>
                Playstyle
                <ul>
                  <li>
                    <a href='#'>Rush</a>
                  </li>
                  <li>
                    <a href='#'>Boom</a>
                  </li>
                  <li>
                    <a href='#'>Etc</a>
                  </li>
                </ul>
              </li>
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
