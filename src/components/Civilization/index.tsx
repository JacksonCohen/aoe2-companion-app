import React from 'react';
import './_Civilization.scss';

interface CivilizationData {
  id: number;
  name: string;
  coat: string;
  checked: boolean;
  handleChange: Function;
}

const Civilization = ({ id, name, coat, checked, handleChange }: CivilizationData) => {
  return (
    <div className='civilization'>
      <input
        className='checkbox'
        type='checkbox'
        checked={checked}
        id={name}
        onChange={() => handleChange(id)}
      />
      <span className='checkmark'></span>
      <label htmlFor={name}>
        <img className='' src={coat} alt={`${name} logo`} />
        {name}
      </label>
    </div>
  );
};

export default Civilization;
