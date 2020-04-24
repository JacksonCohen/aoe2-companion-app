import React, { useState, MutableRefObject } from 'react';
import GuideModal from '../GuideModal';

import './_Card.scss';

interface Props {
  name: string;
  source: string;
  node: MutableRefObject<HTMLDivElement>;
}

const Card = ({ name, source, node }: Props) => {
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
          src={`https://img.youtube.com/vi/${source.slice(-11)}/mqdefault.jpg`}
          alt='Preview'
        />

        <div className='card__guide-info'>
          <span className='card__guide-name'>{name}</span>
        </div>
      </div>

      {showModal && <GuideModal source={source} closeModal={closeModal} node={node} />}
    </>
  );
};

export default Card;
