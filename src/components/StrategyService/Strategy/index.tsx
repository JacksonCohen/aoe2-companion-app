import React, { useState } from 'react';
import Card from '../Card';
import GuideInterface from '../../../interfaces/Guide.interface';

import './_Strategy.scss';

const Strategy = ({ guides }: { guides: GuideInterface[] }) => {
  const [videos, setVideos] = useState<GuideInterface[]>([]);
  const [images, setImages] = useState<GuideInterface[]>([]);
  const [other, setOther] = useState<GuideInterface[]>([]);
  guides.forEach((guide) => {
    if (guide.type === 'Video') {
      setVideos([...videos, guide]);
    } else if (guide.type === 'Image') {
      setImages([...images, guide]);
    } else {
      setOther([...other, guide]);
    }
  });

  return (
    <div className='service__strategy'>
      {guides.map(({ _id, name, source }) => {
        return <Card key={_id} name={name} source={source} />;
      })}
    </div>
  );
};

export default Strategy;
