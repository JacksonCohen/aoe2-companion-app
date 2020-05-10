import React from 'react';
import Dropdown from '../Dropdown';

import './_RandomizerHeader.scss';

interface Props {
  sortCivilizations: (method: string) => void;
  selectChosenCriteria: (criteria: string, option: string) => void;
  selectOrClearAll: (checkedValue: boolean) => void;
  handleFilterClick: () => void;
}

const RandomizerHeader = ({
  sortCivilizations,
  selectChosenCriteria,
  selectOrClearAll,
  handleFilterClick,
}: Props) => {
  // TODO: Implement selection by military type
  // 4 monks
  // 10 infantry
  // 7 navy
  // 9 cavalry
  // 6 archers
  // 2 elephants
  // 2 defense
  // 4 siege
  // 1 camels
  // 4 gunpowder
  // 2 cavalry archers

  return (
    <div className='randomizer__header'>
      <div className='button__sort-options'>
        <ul className='dropdown'>
          <li>
            <button onClick={handleFilterClick}>Filter</button>
          </li>
          <li>
            <button>Sort &nbsp;▶</button>
            <ul className='sort'>
              <Dropdown label='Alphabetical' criteria='alphabetical' callback={sortCivilizations} />
              <Dropdown label='Expansion' criteria='expansion' callback={sortCivilizations} />
            </ul>
          </li>
        </ul>
      </div>
      <div className='button__select-options'>
        {/* <ul className='dropdown'>
          <li>
            <button>Criteria ▼</button>
            <ul>
              <Dropdown
                label='Region'
                options={['Africa', 'Asia', 'Europe', 'The Americas']}
                criteria='geographicRegion'
                callback={selectChosenCriteria}
              />
              <Dropdown
                label='Expansion'
                options={[
                  'The Age of Kings',
                  'The Conquerors',
                  'The Forgotten',
                  'The African Kingdoms',
                  'Rise of the Rajas',
                  'The Last Khans',
                ]}
                criteria='expansion'
                callback={selectChosenCriteria}
              />
            </ul>
          </li>
        </ul> */}

        <button onClick={(): void => selectOrClearAll(true)}>Select all</button>
        <button onClick={(): void => selectOrClearAll(false)}>Clear all</button>
      </div>
    </div>
  );
};

export default RandomizerHeader;
