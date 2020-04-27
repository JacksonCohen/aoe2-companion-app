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
  const guideSource: string =
    type === 'Video' // if guide type is video
      ? `https://img.youtube.com/vi/${source.slice(-11)}/mqdefault.jpg` // set preview source as youtube thumbnail
      : type === 'Image' // if type is image
      ? source // set preview as image url
      : '/static/images/miscellaneous-icon.png'; // otherwise use default image for other type guides
  console.log(guideSource, type, name);

  const handleClick = (): void => {
    if (type !== 'Other') {
      setShowModal(true);
      document.getElementsByClassName('dim')[0].classList.remove('hide');
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
    document.getElementsByClassName('dim')[0].classList.add('hide');
  };

  return (
    <>
      <div className='card' onClick={handleClick}>
        <a href={type === 'Other' ? source : ''} target='_blank'>
          <div className='card__preview-container'>
            <img
              className={`card__preview ${type?.toLowerCase()}`}
              src={guideSource}
              alt='Preview'
            />
          </div>
        </a>

        <div className='card__guide-info'>
          <span className='card__guide-name'>{name}</span>
        </div>
      </div>

      {showModal && <GuideModal source={source} type={type} closeModal={closeModal} node={node} />}
    </>
  );
};

export default Card;
