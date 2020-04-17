import React from 'react';
import Card from '../Card';
import GuideInterface from '../../interfaces/Guide.interface';

const Strategy = ({ guides }: { guides: GuideInterface[] }) => {
  return (
    <div className='servce__strategy'>
      {guides.map(({ _id, name, source, type }) => {
        return <Card key={_id} name={name} source={source} type={type} />;
      })}
    </div>
  );
};

export default Strategy;
