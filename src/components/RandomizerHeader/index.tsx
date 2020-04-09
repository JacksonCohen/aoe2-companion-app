import React from 'react';
import Dropdown from '../Dropdown';

interface Props {
  sortCivilizations: Function;
  selectChosenCriteria: Function;
  selectOrClearAll: Function;
}

const RandomizerHeader = ({ sortCivilizations, selectChosenCriteria, selectOrClearAll }: Props) => {
  return (
    <div className='header'>
      <div className='button__sort-options'>
        <ul className='dropdown'>
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
