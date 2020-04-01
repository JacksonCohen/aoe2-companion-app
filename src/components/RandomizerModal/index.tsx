import React from 'react';
// import CivilizationInterface from '../../interfaces/Civilization.interface';

import './_RandomizerModal.scss';

const RandomizerResults = ({ civilization }: any) => {
  const {
    name,
    coatOfArms,
    speciality,
    uniqueUnit,
    uniqueTechnologies,
    wonder,
    civilizationBonuses,
    teamBonus
  } = civilization;
  console.log(civilization, 'modal');
  return (
    <div className='results-modal'>
      <div className='name'>{name}</div>
      <div className='coatOfArms'>{coatOfArms}</div>
      <div className='speciality'>{speciality}</div>
      <div className='uniqueUnit'>{uniqueUnit}</div>
      <div className='uniqueTechnologies'>{uniqueTechnologies}</div>
      <div className='wonder'>{wonder}</div>
      <div className='civilizationBonuses'>{civilizationBonuses}</div>
      <div className='teamBonus'>{teamBonus}</div>
    </div>
  );
};

export default RandomizerResults;
