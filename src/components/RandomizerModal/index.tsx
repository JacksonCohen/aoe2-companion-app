import React, { useState } from 'react';
// import CivilizationInterface from '../../interfaces/Civilization.interface';

import './_RandomizerModal.scss';

const RandomizerModal = ({ civilization, closeModal }: any) => {
  const [learnMore, setLearnMore] = useState(false);
  const {
    name,
    coatOfArms,
    specialty,
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
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    }
  };

  return (
    <div className='modal'>
      <span id='modal__exit' onClick={(): void => closeModal()}>
        &times;
      </span>
      <div className='modal__results'>
        <div id='civ__name'>You've received the {name}!</div>
        <div id='civ__coatOfArms'>
          <img src={coatOfArms} alt={name} />
        </div>
      </div>

      {!learnMore ? (
        <div className='modal__learn-more'>
          <a onClick={(): void => setLearnMore(true)}>Learn more?</a>
        </div>
      ) : null}
      {learnMore ? (
        <div className='civ__civ-info'>
          <div id='civ__speciality'>Specialty: {specialty}</div>
          <div id='civ__uniqueUnit'>
            {uniqueUnit.length > 1 ? 'Unique units: ' : 'Unique unit: '}
            {formatList(uniqueUnit)}
          </div>
          <div id='civ__uniqueTechnologies'>
            Unique technologies: {formatList(uniqueTechnologies)}
          </div>
          <div id='civ__wonder'>Wonder: {wonder}</div>
          <div id='civ__civilizationBonuses'>
            Civilization bonuses: {formatList(civilizationBonuses, true)}
          </div>
          <div id='civ__teamBonus'>Team bonus: {teamBonus}</div>

          {/* <div className="guide">View guides for the {name}</div> */}
        </div>
      ) : null}
    </div>
  );
};

export default RandomizerModal;
