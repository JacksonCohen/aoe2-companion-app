import React from 'react';
import './_Civilization.scss';

interface Props {
  id: number;
  name: string;
  coat: string;
  checked: boolean;
  handleChange: Function;
}

const Civilization = ({ id, name, coat, checked, handleChange }: Props) => {
  return (
    <div className='civilization'>
      <input
        className='checkbox'
        type='checkbox'
        checked={checked}
        id={name}
        onChange={(): void => handleChange(id)}
      />
      <span className='checkmark'></span>
      <label htmlFor={name}>
        <img className='' src={coat} alt={name} />
        {name}
      </label>
    </div>
  );
};

export default Civilization;
