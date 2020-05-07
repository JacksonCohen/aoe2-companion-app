import React, { useReducer, useState, ChangeEvent } from 'react';
import BuildOrderList from '../BuildOrderList';
import IconSelector from '../IconSelector';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_BuildOrder.scss';

interface State {
  image: string;
  stepTitle: string;
  info: string;
  stepNum: number;
}

const BuildOrder = ({ buildOrders }: { buildOrders: BuildOrderInterface[] }) => {
  const initialState = {
    image: '/static/images/game-icons/44AoEIIDE.png',
    stepTitle: '',
    info: '',
  };
  const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

  const [buildOrder, setBuildOrder] = useState<any>([]);
  const [formData, setFormData] = useReducer(stateReducer, initialState);
  const [stepNum, setStepNum] = useState(1);
  const [orderTitle, setOrderTitle] = useState('');
  const [tempTitle, setTempTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (type: string, index?: number): void => {
    if (type === 'add') {
      const { image, stepTitle, info } = formData;
      if (image && stepTitle && info) {
        setBuildOrder([...buildOrder, formData]);
        setFormData(initialState);
        setStepNum(stepNum + 1);
        setSelectedIcon('');
        setError(false);
      } else {
        setError(true);
      }
    } else if (type === 'delete' && index !== undefined) {
      const steps = [...buildOrder];
      steps.splice(index, 1);
      setBuildOrder(steps);
      setStepNum(stepNum - 1);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    stepNumber?: number,
  ): void => {
    const { name, value } = event.target;

    if (stepNumber !== undefined) {
      const orderCopy = [...buildOrder];
      orderCopy[stepNumber][name] = value;
      setBuildOrder(orderCopy);
    } else if (name === 'tempTitle') {
      setTempTitle(value);
    } else {
      setFormData({ [name]: value });
    }
  };

  const setIcon = (src: string): void => {
    const temp = formData;
    temp.image = src;
    setFormData(temp);
  };

  const displayError = (type: string, field?: string): boolean => {
    if (type === 'title') {
      if (error && orderTitle === '') {
        return true;
      }
    } else if (type === 'step' && field) {
      if (error && formData[field] === '') {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (event: any): void => {
    if (event.target!.name === 'tempTitle') {
      setOrderTitle(tempTitle);
      setTempTitle('');
    } else {
      fetch('/api/build-order', {
        method: 'POST',
        body: JSON.stringify({
          title: orderTitle,
          buildOrder,
        }),
      });
    }
  };

  return (
    <div className='service__build-order'>
      {/* title input */}
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
          <input
            type='button'
            name='tempTitle'
            value='Submit title'
            onClick={(event) => handleSubmit(event)}
          />
        </form>
      ) : (
        <>
          {/* title */}
          <div className='build-order__title'>{orderTitle}</div>

          {/* past steps */}
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
                  className='build-order__delete-step'
                  onClick={() => handleClick('delete', index)}
                >
                  &#10006;
                </span>
              </div>
            );
          })}

          {/* current step */}
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
                {/* buttons */}
                <div className='build-order__buttons'>
                  <input type='button' value='Add Step' onClick={() => handleClick('add')} />

                  {buildOrder.length !== 0 && (
                    <input type='button' value='Submit' onClick={handleSubmit} />
                  )}
                </div>
              </fieldset>
            </form>
          </div>
        </>
      )}

      <BuildOrderList orders={buildOrders} />
    </div>
  );
};

export default BuildOrder;
