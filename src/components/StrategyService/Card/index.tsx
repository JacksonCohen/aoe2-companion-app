import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import GuideInterface from '../../../interfaces/Guide.interface';

import './_Card.scss';

const Card = ({ name, source }: GuideInterface) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (): void => {
    setShowModal(true);
  };

  const videoId = source.slice(-11);

  return (
    <>
      <div className='card' onClick={handleClick}>
        <div className='card__player-wrapper'>
          <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt='' />
        </div>
        <div className='card__guide-info'>
          <span className='card__guide-name'>{name}</span>
        </div>
      </div>

      {showModal ? (
        <div className='card__guide-modal'>
          <ReactPlayer
            className='card__react-player'
            z
            url={source}
            light={true}
            width='100%'
            height='100%'
          />
        </div>
      ) : null}
    </>
  );
};

export default Card;
