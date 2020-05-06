import React from 'react';
import BuildOrderInterface from '../../../interfaces/BuildOrder.interface';

import './_BuildOrderList.scss';

const BuildOrderList = ({ orders }: { orders: BuildOrderInterface[] }) => (
  <div className='build-order__container'>
    {orders.map(({ order }: any) => {
      // TODO: Fix type
      // console.log(order, 'order');
      return (
        <div className='build-order__item' key={order._id}>
          <div className='build-order__title'>{order.title}</div>
          {order.map((step: any, index: number) => (
            <div className='build-order__step' key={index}>
              <img src='https://vignette.wikia.nocookie.net/ageofempires/images/d/de/CastleageDE.png/revision/latest?cb=20200223093258' />
              {/* TODO: Replace placeholder image */}
              <div className='step__text'>
                <div className='step__title'>{step.title}</div>
                <div className='step__info'>{step.info}</div>
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

export default BuildOrderList;
