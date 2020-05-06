import React, { useReducer, useState, ChangeEvent } from 'react';
import BuildOrderList from '../BuildOrderList';
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
    image: '',
    stepTitle: '',
    info: '',
  };
  const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

  const [buildOrder, setBuildOrder] = useState<any>([]);
  const [formData, setFormData] = useReducer(stateReducer, initialState);
  const [stepNum, setStepNum] = useState(1);
  const [orderTitle, setOrderTitle] = useState('');

  const handleDeleteClick = (index: any): void => {
    const steps = [...buildOrder];
    steps.splice(index, 1);
    setBuildOrder(steps);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    stepNumber?: number
  ): void => {
    const { name, value } = event.target;

    if (stepNumber !== undefined) {
      const orderCopy = [...buildOrder];
      orderCopy[stepNumber][name] = value;
      setBuildOrder(orderCopy);
    } else if (name === 'orderTitle') {
      setOrderTitle(value);
    } else {
      setFormData({ [name]: value });
    }
  };

  const handleAddClick = (): void => {
    setBuildOrder([...buildOrder, formData]);
    setFormData(initialState);
    setStepNum(stepNum + 1);
  };

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
    <div className='service__build-order'>
      {orderTitle.length === 0 ? (
        <form className='build-order__title-input'>
          <input
            type='text'
            name='orderTitle'
            placeholder='Enter build order title'
            maxLength={20}
            value={orderTitle}
            onChange={(event) => handleChange(event)}
          />
          <input type='button' value='Submit title' onClick={handleSubmit} />
        </form>
      ) : (
        <>
          <div className='build-order__title'>{orderTitle}</div>

          {buildOrder.map((step: any, index: number) => {
            return (
              <div className='build-order__input' key={index}>
                {/* <input type='' value={step.image} /> */}
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
                <span className='build-order__delete-step' onClick={() => handleDeleteClick(index)}>
                  &#10006;
                </span>
              </div>
            );
          })}

          <form action='submit'>
            <fieldset>
              <input
                type='text'
                name='stepTitle'
                placeholder='Enter title'
                maxLength={30}
                value={formData.stepTitle}
                onChange={(event) => handleChange(event)}
              />
              <input
                type='text'
                name='info'
                placeholder='Enter info'
                maxLength={40}
                value={formData.info}
                onChange={(event) => handleChange(event)}
              />
              <span className='build-order__delete-step' onClick={() => setOrderTitle('')}>
                &#10006;
              </span>
            </fieldset>

            <fieldset>
              <input type='button' value='Add Step' onClick={handleAddClick} />

              {buildOrder.length !== 0 && (
                <input type='button' value='Submit' onClick={handleSubmit} />
              )}
            </fieldset>
          </form>
        </>
      )}

      <BuildOrderList orders={buildOrders} />
    </div>
  );
};

export default BuildOrder;
