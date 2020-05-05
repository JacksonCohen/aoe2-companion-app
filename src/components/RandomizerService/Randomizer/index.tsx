import React, { useEffect, useState } from 'react';
import CivilizationsList from '../CivilizationsList';
import RandomizerHeader from '../RandomizerHeader';
import RandomizerModal from '../RandomizerModal';
import CivilizationInterface from '../../../interfaces/Civilization.interface';
import { civilizationData } from '../../../../data/civs';

import './_Randomizer.scss';

const Randomizer = () => {
  const [civilizations, setCivilizations] = useState<CivilizationInterface[]>([]);
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
          order.indexOf(a.expansion) - order.indexOf(b.expansion),
      );
      setCivilizations(civs);
    }
  };

  const reloadGif = (gif: string, stateUpdate: Function): void => {
    stateUpdate('');
    setTimeout(() => {
      stateUpdate(gif);
    }, 0);
  };

  const selectOrClearAll = (checkedValue: boolean): void => {
    const civs: CivilizationInterface[] = [...civilizations!];
    civs.forEach((civ: CivilizationInterface) => (civ.checked = checkedValue));
    setCivilizations(civs);
  };

  const closeModal = (): void => {
    selectOrClearAll(false);
    setSelectedRandomCiv({});
    setLoadedGif('/static/images/scroll-modal-before.gif');
    setTempGif('/static/images/scroll-modal-before.gif');
  };

  const updateModalGif = (): void => {
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

  const selectCiv = (): void => {
    const validCivs: CivilizationInterface[] = civilizations!.filter(
      (civ: CivilizationInterface) => civ.checked,
    );

    if (validCivs.length > 0) {
      // pick a random civ from the checked civs and update state
      setSelectedRandomCiv(validCivs[Math.floor(Math.random() * validCivs!.length)]);
    } else {
      // alert if there are no civs selected
      alert('Select one or more random civilizations to receive a random selection.');
    }
  };

  return (
    <div className='service__randomizer'>
      <RandomizerHeader
        sortCivilizations={sortCivilizations}
        selectChosenCriteria={selectChosenCriteria}
        selectOrClearAll={selectOrClearAll}
      />

      <CivilizationsList civilizations={civilizations} setCivs={setCivilizations} />

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

      {/* if the randomizer has been used with 1+ civs selected, open the modal */}
      {!!Object.keys(selectedRandomCiv).length && (
        <RandomizerModal
          civilization={selectedRandomCiv}
          updateModalGif={updateModalGif}
          closeModal={closeModal}
          gif={loadedGif}
        />
      )}
    </div>
  );
};

export default Randomizer;
