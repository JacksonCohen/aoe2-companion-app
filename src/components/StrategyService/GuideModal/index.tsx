import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

import './_GuideModal.scss';

const GuideModal = ({ source, closeModal }: { source: string; closeModal: Function }) => {
  useEffect(() => {
    document.addEventListener('keydown', escapeModal);

    return (): void => document.removeEventListener('keydown', escapeModal);
  });

  const escapeModal = (event: KeyboardEvent) => {
    // close modal using 'esc' key
    if (event.keyCode === 27) {
      closeModal();
    }
  };
  return (
    <div className='modal__container'>
      <span className='modal__exit' onClick={(): void => closeModal()}>
        &times;
      </span>

      <div className='card__guide-modal'>
        <ReactPlayer url={source} controls={true} playing />
      </div>
    </div>
  );
};

export default GuideModal;
