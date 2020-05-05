import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

import './_GuideModal.scss';

interface Props {
  source: string;
  type: string;
  node: any;
  closeModal: () => void;
}

const GuideModal = ({ source, type, node, closeModal }: Props) => {
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

  const handleModalEscape = (event: KeyboardEvent): void => {
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
        {type === 'Video' ? <ReactPlayer url={source} controls={true} /> : <img src={source} />}
      </div>
    </div>
  );
};

export default GuideModal;
