import React, { useReducer, useState, ChangeEvent } from 'react';

import './_BuildOrder.scss';

interface State {
  image: string;
  title: string;
  info: string;
}

const BuildOrder = () => {
  const initialState = {
    image: '',
    title: '',
    info: '',
  };
  const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

  const [buildOrder, setBuildOrder] = useState<any>([]);
  const [formData, setFormData] = useReducer(stateReducer, initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;

    setFormData({ [name]: value });
  };

  const handleAddClick = (): void => {
    setBuildOrder([...buildOrder, formData]);
    setFormData(initialState);
  };

  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <div className='service__build-order'>
      {buildOrder.map((step: any, index: number): any => (
        <div key={index}>
          <img src={step.image} />
          <div>{step.title}</div>
          <div>{step.info}</div>
        </div>
      ))}

      <form action='submit'>
        <fieldset>
          <input
            type='text'
            name='title'
            className='input'
            placeholder='Enter title'
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type='text'
            name='info'
            className='input'
            placeholder='Enter info'
            value={formData.info}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <input type='button' value='Add' onClick={handleAddClick} />
          <input type='button' value='Submit' onSubmit={handleSubmit} />
        </fieldset>
      </form>
    </div>
  );
};

export default BuildOrder;
