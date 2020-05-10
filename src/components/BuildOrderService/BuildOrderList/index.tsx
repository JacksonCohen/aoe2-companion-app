import React from 'react';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_BuildOrderList.scss';

const BuildOrderList = ({ orders }: { orders: BuildOrderInterface[] }) => {
  return (
    <div className='build-order__container'>
      {orders.map(({ order, orderTitle }: any, index) => {
        // TODO: Fix type

        return (
          <div className='container__item' key={index}>
            <div className='item__title'>{orderTitle}</div>
            {order.map((step: any, innerIndex: number) => (
              <div className='item__step' key={innerIndex}>
                <img src={step.image} />
                <div className='step__text'>
                  <div className='step__title'>{step.stepTitle}</div>
                  <div className='step__info'>{step.info}</div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BuildOrderList;
