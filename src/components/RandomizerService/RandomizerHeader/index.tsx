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
  return (
    <div className='randomizer__header'>
      <div className='button__sort-options'>
        <ul className='dropdown'>
          <li>
            <button type='button' onClick={handleFilterClick}>
              Filter
            </button>
          </li>
          <li>
            <button type='button'>Sort &nbsp;▶</button>
            <ul className='sort'>
              <Dropdown label='Alphabetical' criteria='alphabetical' callback={sortCivilizations} />
              <Dropdown label='Expansion' criteria='expansion' callback={sortCivilizations} />
            </ul>
          </li>
        </ul>
      </div>
      <div className='button__select-options'>
        <button type='button' onClick={(): void => selectOrClearAll(true)}>
          Select all
        </button>
        <button type='button' onClick={(): void => selectOrClearAll(false)}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default RandomizerHeader;
