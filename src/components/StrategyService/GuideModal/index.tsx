import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

import './_GuideModal.scss';

interface Props {
  source: string;
  node: any;
  closeModal: Function;
}

const GuideModal = ({ source, node, closeModal }: Props) => {
  useEffect(() => {
    document.addEventListener('keydown', handleModalEscape);
    document.addEventListener('mousedown', handleOutsideClick);

    return (): void => {
      document.removeEventListener('keydown', handleModalEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: Event): void => {
    // close the modal if the dim element (anywhere outside the modal) is clicked
    if (node.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleModalEscape = (event: KeyboardEvent) => {
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
