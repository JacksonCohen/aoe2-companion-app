import React, { ChangeEvent } from 'react';
import IconSelector from '../IconSelector';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_CurrentStepForm.scss';

interface Props {
  stepNum: number;
  selectedIcon: string;
  setIcon: any;
  setSelectedIcon: any;
  setOrderTitle: any;
  formData: {
    image: string;
    stepTitle: string;
    info: string;
  };
  orderTitle: string;
  buildOrder: BuildOrderInterface[];
  displayError: (type: string, field?: string) => boolean;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    stepNumber?: number
  ) => void;
  handleClick: (type: string, index?: number) => void;
}

const CurrentStepForm = ({
  stepNum,
  selectedIcon,
  setIcon,
  setSelectedIcon,
  setOrderTitle,
  formData,
  orderTitle,
  buildOrder,
  displayError,
  handleChange,
  handleClick,
}: Props) => {
  const handleSubmit = (): void => {
    fetch('/api/build-order', {
      method: 'POST',
      body: JSON.stringify({
        title: orderTitle,
        buildOrder,
      }),
    });
  };

  return (
    <div className={`build-order__current-step step-${stepNum}`}>
      <form action='submit'>
        <fieldset>
          <IconSelector
            setSelectedIcon={setSelectedIcon}
            selectedIcon={selectedIcon}
            setIcon={setIcon}
          />
          <input
            type='text'
            name='stepTitle'
            placeholder='Enter title'
            maxLength={30}
            value={formData.stepTitle}
            className={`${displayError('step', 'stepTitle') ? 'error' : ''}`}
            onChange={(event) => handleChange(event)}
          />
          <input
            type='text'
            name='info'
            placeholder='Enter info'
            maxLength={40}
            value={formData.info}
            className={`${displayError('step', 'info') ? 'error' : ''}`}
            onChange={(event) => handleChange(event)}
          />
          {stepNum === 1 && (
            <span className='build-order__delete-step' onClick={() => setOrderTitle('')}>
              &#10006;
            </span>
          )}
        </fieldset>

        <fieldset>
          <div className='build-order__buttons'>
            <input type='button' value='Add Step' onClick={() => handleClick('add')} />

            {buildOrder.length !== 0 && (
              <input type='button' value='Submit' onClick={handleSubmit} />
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default CurrentStepForm;
