import React, { ChangeEvent } from 'react';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_PastSteps.scss';

interface Props {
  orderTitle: string;
  buildOrder: BuildOrderInterface[];
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    stepNumber?: number
  ) => void;
  handleClick: (type: string, index?: number) => void;
}

const PastSteps = ({ orderTitle, buildOrder, handleChange, handleClick }: Props) => (
  <>
    <div className='build-order__title'>{orderTitle}</div>

    {buildOrder.map((step: any, index: number) => {
      return (
        <div className='build-order__input' key={index}>
          <img className='icon' src={step.image} />
          <input
            type='text'
            name='stepTitle'
            maxLength={30}
            value={step.stepTitle}
            onChange={(event) => handleChange(event, index)}
          />
          <input
            type='text'
            name='info'
            maxLength={40}
            value={step.info}
            onChange={(event) => handleChange(event, index)}
          />
          <span
            className='build-order__delete-step delete-step'
            onClick={() => handleClick('delete', index)}
          >
            &#10006;
          </span>
        </div>
      );
    })}
  </>
);

export default PastSteps;
