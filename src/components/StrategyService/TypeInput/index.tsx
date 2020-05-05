import React, { ChangeEvent } from 'react';

interface Props {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  displayError: (field: string) => boolean;
}

const TypeInput = ({ value, handleChange, displayError }: Props) => {
  const capitalize = (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <>
      <input
        type='radio'
        id={value}
        name='type'
        value={capitalize(value)}
        className='strategy__type-input'
        onChange={handleChange}
      />
      <label
        className={`strategy__${value}-label${displayError('type') ? ' error' : ''}`}
        htmlFor={value}
      >
        {capitalize(value)}
      </label>
    </>
  );
};

export default TypeInput;
