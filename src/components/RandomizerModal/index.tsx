import React, { Fragment, useState } from 'react';
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
    teamBonus,
  } = civilization;

  const formatList = (list: string[], longList: boolean | undefined = false) => {
    let output: string = '';

    if (list.length === 1) return list[0];

    if (!longList) {
      if (list.length === 2) {
        return `${list[0]} and ${list[1]}`;
      } else {
        list.forEach((item: string) => (output += `${item}, `));
      }
    } else {
      return (
        <ol>
          {list.map((item: string, index: number) => (
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
        <div id='civ__name'>
          <strong>You've received the {name}!</strong>
        </div>
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
          <div>
            <strong>Specialty</strong>: {specialty}
          </div>
          <div>
            <strong>Unique unit{uniqueUnit.length > 1 ? 's' : ''}</strong>: {formatList(uniqueUnit)}
          </div>
          <div>
            <strong>Unique technologies</strong>: {formatList(uniqueTechnologies)}
          </div>
          <div>
            <strong>Wonder</strong>: {wonder}
          </div>
          <div>
            <strong>Civilization bonuses</strong>: {formatList(civilizationBonuses, true)}
          </div>
          <div>
            <strong>Team bonus</strong>: {teamBonus}
          </div>

          {/* <div className="guide">View guides for the {name}</div> */}
        </div>
      ) : null}
    </div>
  );
};

export default RandomizerModal;
