import React from 'react';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_BuildOrderList.scss';

const BuildOrderList = ({ orders }: { orders: BuildOrderInterface[] }) => {
  return (
    <div className='build-order__container'>
      {orders.map(({ order, orderTitle }: any, index) => {
        // TODO: Fix type

        return (
          <div className='build-order__item' key={index}>
            <div className='build-order__title'>{orderTitle}</div>
            {order.map((step: any, innerIndex: number) => (
              <div className='build-order__step' key={innerIndex}>
                <img src='https://vignette.wikia.nocookie.net/ageofempires/images/d/de/CastleageDE.png/revision/latest?cb=20200223093258' />
                {/* TODO: Replace placeholder image */}
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
