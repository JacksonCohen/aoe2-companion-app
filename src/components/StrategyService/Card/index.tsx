import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import GuideInterface from '../../../interfaces/Guide.interface';

import './_Card.scss';

const Card = ({ name, source }: GuideInterface) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (): void => {
    setShowModal(true);
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

      {showModal ? (
        <div className='card__guide-modal'>
          <ReactPlayer url={source} playing />
        </div>
      ) : null}
    </>
  );
};

export default Card;
