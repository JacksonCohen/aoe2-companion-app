import React from 'react';
import FilterCategory from '../FilterCategory';

import './_FilterModal.scss';

interface Props {
  selectChosenCriteria: (criteria: string, option: string) => void;
}

const categories = [
  { name: 'Region', selections: ['Africa', 'Asia', 'Europe', 'The Americas'] },
  {
    name: 'Military',
    selections: [
      'Infantry',
      'Archers',
      'Cavalry',
      'Navy',
      'Gunpowder',
      'Cavalry Archers',
      'Monks',
      'Siege',
      'Elephants',
      'Camels',
      'Defense',
    ],
  },
  {
    name: 'Expansion',
    selections: [
      'The Age of Kings',
      'The Conquerors',
      'The Forgotten',
      'The African Kingdoms',
      'Rise of the Rajas',
      'The Last Khans',
    ],
  },
];

const FitlerModal = ({ selectChosenCriteria }: Props) => {
  return (
    <div className='filter'>
      {categories.map(({ name, selections }) => (
        <FilterCategory
          name={name}
          selections={selections}
          selectChosenCriteria={selectChosenCriteria}
        />
      ))}
    </div>
  );
};

export default FitlerModal;
