import React from 'react';
import Card from '../Card';
import GuideInterface from '../../interfaces/Guide.interface';

const Strategy = ({ guides }: { guides: GuideInterface[] }) => {
  console.log(guides);
  return (
    <div className='servce__strategy'>
      {/* {guides.map(({ name, source, type }) => {
        <Card name={name} source={source} type={type} />; */}
      {/* })} */}
    </div>
  );
};

export default Strategy;
