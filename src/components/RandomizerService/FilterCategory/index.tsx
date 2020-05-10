import React from 'react';

const FilterCategory = ({ name, selections, selectChosenCriteria }: any) => {
  return (
    <div className='filter__category'>
      <div className='category__title'>{name}</div>
      <div className='category__select-options'>
        <button type='button'>All</button>
        <button type='button'>None</button>
      </div>
      <div className='category__selections'>
        {selections.map((selection: any) => (
          <>
            <input
              type='checkbox'
              id={selection}
              value={selection}
              onChange={() => console.log('changed')}
            />
            <label htmlFor={selection}>{selection}</label>
          </>
        ))}
      </div>
    </div>
  );
};

export default FilterCategory;
