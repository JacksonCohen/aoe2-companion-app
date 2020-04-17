import React from 'react';
import ReactPlayer from 'react-player';
import GuideInterface from '../../interfaces/Guide.interface';

const Card = ({ name, source, type }: GuideInterface) => {
  return (
    <div className='strategy__card'>
      <div className='strategy__player-wrapper'>
        <ReactPlayer className='react-player' url={source} width='50%' height='100%' />
      </div>
    </div>
  );
};

export default Card;
