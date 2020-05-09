import React, { useReducer, useState, ChangeEvent } from 'react';
import PastSteps from '../PastSteps';
import TitleInput from '../TitleInput';
import BuildOrderList from '../BuildOrderList';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_BuildOrder.scss';
import CurrentStepForm from '../CurrentStepForm';

interface State {
  image: string;
  stepTitle: string;
  info: string;
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

  return (
    <div className='service__build-order'>
      {orderTitle.length === 0 ? (
        <TitleInput
          orderTitle={orderTitle}
          setOrderTitle={setOrderTitle}
          error={error}
          setError={setError}
        />
      ) : (
        <>
          <PastSteps
            orderTitle={orderTitle}
            buildOrder={buildOrder}
            handleChange={handleChange}
            handleClick={handleClick}
          />

          <CurrentStepForm
            stepNum={stepNum}
            selectedIcon={selectedIcon}
            setIcon={setIcon}
            setSelectedIcon={setSelectedIcon}
            setOrderTitle={setOrderTitle}
            setError={setError}
            formData={formData}
            orderTitle={orderTitle}
            buildOrder={buildOrder}
            displayError={displayError}
            handleChange={handleChange}
            handleClick={handleClick}
            initialState={initialState}
            setFormData={setFormData}
          />
        </>
      )}

      <BuildOrderList orders={buildOrders} />
    </div>
  );
};

export default BuildOrder;
