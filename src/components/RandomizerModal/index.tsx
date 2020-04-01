import React, { useState } from 'react';
// import CivilizationInterface from '../../interfaces/Civilization.interface';

import './_RandomizerModal.scss';

const RandomizerResults = ({ civilization, closeModal }: any) => {
  const [learnMore, setLearnMore] = useState(false);
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

  return (
    <div className='results-modal'>
      <span id='exit' onClick={(): void => closeModal()}>
        &times;
      </span>
      <div className='results'>
        <div className='name'>You've received the {name}!</div>
        <div className='coatOfArms'>
          <img src={coatOfArms} alt={name} />
        </div>
      </div>

      {!learnMore ? (
        <div className='learn-more'>
          <a onClick={(): void => setLearnMore(true)}>Learn more?</a>
        </div>
      ) : null}
      {learnMore ? (
        <div className='civ-info'>
          <div className='speciality'>Speciality: {speciality}</div>
          <div className='uniqueUnit'>
            {uniqueUnit.length > 1 ? 'Unique units: ' : 'Unique unit: '}
            {uniqueUnit}
          </div>
          <div className='uniqueTechnologies'>
            {uniqueTechnologies.length > 1 ? 'Unique technologies: ' : 'Unique technology: '}
            {uniqueTechnologies}
          </div>
          <div className='wonder'>Wonder: {wonder}</div>
          <div className='civilizationBonuses'>Civilization bonuses: {civilizationBonuses}</div>
          <div className='teamBonus'>Team bonus: {teamBonus}</div>

          {/* <div className="guide">View guides for the {name}</div> */}
        </div>
      ) : null}
    </div>
  );
};

export default RandomizerResults;
