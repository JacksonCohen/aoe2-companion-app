import React, { useState, ChangeEvent } from 'react';

import './_TitleInput.scss';

interface Props {
  orderTitle: string;
  setOrderTitle: any;
  error: boolean;
  setError: any;
}

const TitleInput = ({ orderTitle, setOrderTitle, error, setError }: Props) => {
  const [tempTitle, setTempTitle] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setTempTitle(event.target.value);
  };

  const handleSubmit = (): void => {
    if (tempTitle === '' && !error) {
      setError(true);
    } else {
      setError(false);
    }

    setOrderTitle(tempTitle);
    setTempTitle('');
  };

  const displayError = (type: string): boolean => {
    if (type === 'title') {
      if (error && tempTitle === '') {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {orderTitle.length === 0 ? (
        <form className='build-order__title-input'>
          <input
            type='text'
            placeholder='Enter build order title...'
            name='tempTitle'
            maxLength={20}
            className={`${displayError('title') ? 'error' : ''}`}
            onChange={(event) => handleChange(event)}
          />
          <input type='button' name='tempTitle' value='Submit Title' onClick={handleSubmit} />
        </form>
      ) : (
        <div className='build-order__title'>{orderTitle}</div>
      )}
    </>
  );
};

export default TitleInput;
