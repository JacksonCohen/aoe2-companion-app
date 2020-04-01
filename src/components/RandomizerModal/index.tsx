import React, { useState } from 'react';
// import CivilizationInterface from '../../interfaces/Civilization.interface';

import './_RandomizerModal.scss';

const RandomizerModal = ({ civilization, closeModal }: any) => {
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

  const formatList = (list: string[], longList: boolean | undefined = false) => {
    let output = '';

    if (list.length === 1) return list[0];

    if (!longList) {
      if (list.length === 2) {
        return `${list[0]} and ${list[1]}`;
      } else {
        list.forEach(item => (output += `${item}, `));
      }
    } else {
      return (
        <ol>
          {list.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      );
    }
  };

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
            {formatList(uniqueUnit)}
          </div>
          <div className='uniqueTechnologies'>
            Unique technologies: {formatList(uniqueTechnologies)}
          </div>
          <div className='wonder'>Wonder: {wonder}</div>
          <div className='civilizationBonuses'>
            Civilization bonuses: {formatList(civilizationBonuses, true)}
          </div>
          <div className='teamBonus'>Team bonus: {teamBonus}</div>

          {/* <div className="guide">View guides for the {name}</div> */}
        </div>
      ) : null}
    </div>
  );
};

export default RandomizerModal;
