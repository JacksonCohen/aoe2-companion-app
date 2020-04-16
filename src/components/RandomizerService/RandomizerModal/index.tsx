import React, { useState, useEffect } from 'react';

import './_RandomizerModal.scss';

const RandomizerModal = ({ civilization, updateModalGif, closeModal, gif }: any) => {
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

  useEffect(() => {
    document.addEventListener('keydown', escapeModal);

    return (): void => document.removeEventListener('keydown', escapeModal);
  });

  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName('modal__body')[0].classList.remove('hide');
    }, 250);
  }, []);

  const escapeModal = (event: KeyboardEvent) => {
    // close modal using 'esc' key
    if (event.keyCode === 27) {
      closeModal();
    }
  };

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
    <div className='modal__container'>
      <span id='modal__exit' onClick={(): void => closeModal()}>
        &times;
      </span>
      <img id='scroll' src={gif} />
      <div className={`modal__body hide`}>
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
            <a
              onClick={(): void => {
                setTimeout(() => {
                  setLearnMore(true);
                }, 500);
                updateModalGif();
              }}
            >
              Learn more?
            </a>
          </div>
        ) : null}
        {learnMore ? (
          <div className='modal__civ-info'>
            <div>
              <strong>Specialty</strong>: {specialty}
            </div>
            <div>
              <strong>Unique unit{uniqueUnit.length > 1 ? 's' : ''}</strong>:{' '}
              {formatList(uniqueUnit)}
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
    </div>
  );
};

export default RandomizerModal;
