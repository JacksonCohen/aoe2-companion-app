import React, { useState, ChangeEvent } from 'react';

import './_TitleInput.scss';

interface Props {
  orderTitle: string;
  setOrderTitle: any;
  displayError: (type: string, field?: string) => boolean;
}

const TitleInput = ({ orderTitle, setOrderTitle, displayError }: Props) => {
  const [tempTitle, setTempTitle] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setTempTitle(event.target.value);
  };

  const handleSubmit = (): void => {
    setOrderTitle(tempTitle);
    setTempTitle('');
  };

  return (
    <>
      {orderTitle.length === 0 ? (
        <form className='build-order__title-input'>
          <input
            type='text'
            placeholder='Enter build order title'
            name='tempTitle'
            maxLength={20}
            value={tempTitle}
            className={`${displayError('title') ? ' error' : ''}`}
            onChange={(event) => handleChange(event)}
          />
          <input type='button' name='tempTitle' value='Submit title' onClick={handleSubmit} />
        </form>
      ) : (
        <div className='build-order__title'>{orderTitle}</div>
      )}
    </>
  );
};

export default TitleInput;
