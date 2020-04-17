import React, { useState, useEffect } from 'react';
import CivilizationInterface from '../../../interfaces/Civilization.interface';
import Civilization from '../Civilization';
import RandomizerHeader from '../RandomizerHeader';
import RandomizerModal from '../RandomizerModal';
import { civilizationData } from '../../../../data/civs';

import './_CivilizationsList.scss';

const CivilizationsList = () => {
  const [civilizations, setCivilizations] = useState<CivilizationInterface[] | undefined>([]);
  const [selectedRandomCiv, setSelectedRandomCiv] = useState({});
  const [loadedGif, setLoadedGif] = useState('/static/images/scroll-modal-before.gif');
  const [tempGif, setTempGif] = useState('/static/images/scroll-modal-before.gif');

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

    if (validCivs.length > 0) {
      // pick a random civ from the checked civs and update state
      setSelectedRandomCiv(validCivs[Math.floor(Math.random() * validCivs!.length)]);
    } else {
      // alert if there are no civs selected
      alert('Select one or more random civilizations to receive a random selection.');
    }
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
    setLoadedGif('/static/images/scroll-modal-before.gif');
    setTempGif('/static/images/scroll-modal-before.gif');
  };

  const reloadGif = (gif: string, stateUpdate: Function): void => {
    stateUpdate('');
    setTimeout(() => {
      stateUpdate(gif);
    }, 0);
  };

  const updateModalGif = (): void => {
    // setLoadedGif('/static/images/scroll-modal-after.gif');
    // setTempGif('/static/images/scroll-modal-after.gif');
    // console.log(loadedGif, 'gif');
    const scroll: any = document.getElementById('scroll');
    scroll!.src = '/static/images/scroll-modal-after.gif';
  };

  const selectChosenCriteria = (criteria: string, option: string): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    civs.forEach((civ: CivilizationInterface) => {
      if (civ[criteria].includes(option) || civ[criteria] === option) {
        civ.checked = !civ.checked;
      }
    });
    setCivilizations(civs);
  };

  return (
    <>
      <section className='section__randomizer'>
        <RandomizerHeader
          sortCivilizations={sortCivilizations}
          selectChosenCriteria={selectChosenCriteria}
          selectOrClearAll={selectOrClearAll}
        />

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

        <div className='button__randomizer'>
          <button
            onClick={() => {
              selectCiv();
              reloadGif(tempGif, setLoadedGif);
            }}
            disabled={!!Object.keys(selectedRandomCiv).length ? true : false}
          >
            Randomize!
          </button>
        </div>
      </section>

      {/* if the randomizer has been used with 1+ civs selected, open the modal */}
      {!!Object.keys(selectedRandomCiv).length ? (
        <RandomizerModal
          civilization={selectedRandomCiv}
          updateModalGif={updateModalGif}
          closeModal={closeModal}
          gif={loadedGif}
        />
      ) : null}
    </>
  );
};

export default CivilizationsList;
