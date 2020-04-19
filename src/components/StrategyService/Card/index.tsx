import React, { useState } from 'react';
import GuideModal from '../GuideModal';
import GuideInterface from '../../../interfaces/Guide.interface';

import './_Card.scss';

const Card = ({ name, source }: GuideInterface) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (): void => {
    setShowModal(true);
    document.getElementsByClassName('dim')[0].classList.remove('hide');
  };

  const closeModal = (): void => {
    setShowModal(false);
    document.getElementsByClassName('dim')[0].classList.add('hide');
  };

  return (
    <>
      <div className='card' onClick={handleClick}>
        <img
          className='card__video-preview'
          src={`http://img.youtube.com/vi/${source.slice(-11)}/mqdefault.jpg`}
          alt='Preview'
        />

        <div className='card__guide-info'>
          <span className='card__guide-name'>{name}</span>
        </div>
      </div>

      {showModal ? <GuideModal source={source} closeModal={closeModal} /> : null}
    </>
  );
};

export default Card;
