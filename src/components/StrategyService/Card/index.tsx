import React, { useState, MutableRefObject } from 'react';
import GuideModal from '../GuideModal';

import './_Card.scss';

interface Props {
  name: string;
  source: string;
  type?: string;
  node: MutableRefObject<HTMLDivElement>;
}

const Card = ({ name, source, type, node }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const guideSource =
    type === 'Video' ? `https://img.youtube.com/vi/${source.slice(-11)}/mqdefault.jpg` : source;

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
        <img className={`card__preview ${type?.toLowerCase()}`} src={guideSource} alt='Preview' />

        <div className='card__guide-info'>
          <span className='card__guide-name'>{name}</span>
        </div>
      </div>

      {showModal && <GuideModal source={source} type={type} closeModal={closeModal} node={node} />}
    </>
  );
};

export default Card;
