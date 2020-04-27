import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
import Card from '../Card';
import FormSubmit from '../FormSubmit';
import GuideInterface from '../../../interfaces/Guide.interface';

import './_Strategy.scss';

const Strategy = ({ guides }: { guides: GuideInterface[] }) => {
  const [guideTypes, setGuideTypes] = useState<{
    videos: GuideInterface[];
    images: GuideInterface[];
    other: GuideInterface[];
  }>({ videos: [], images: [], other: [] });
  const node = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const videos = guides.filter((guide) => guide.type === 'Video');
    const images = guides.filter((guide) => guide.type === 'Image');
    const other = guides.filter((guide) => guide.type === 'Other');

    setGuideTypes({ videos, images, other });
  }, [guides]);

  return (
    <div className='service__strategy'>
      <FormSubmit />

      <div className='strategy__category strategy__videos'>
        <h2>Videos</h2>
        <div className='strategy__video-cards'>
          {guideTypes.videos.map(({ _id, name, source, type }) => {
            return <Card key={_id} name={name} source={source} type={type} node={node} />;
          })}
          {guideTypes.videos.length === 0 && (
            <div>
              Looks like there aren't any video guides yet. <a href='#submit'>Click here</a> to
              upload one!
            </div>
          )}
        </div>
      </div>

      <div className='strategy__category strategy__images'>
        <h2>Images</h2>
        <div className='strategy__image-cards'>
          {guideTypes.images.map(({ _id, name, source, type }) => {
            return <Card key={_id} name={name} source={source} type={type} node={node} />;
          })}
          {guideTypes.images.length === 0 && (
            <div>
              Looks like there aren't any image guides yet. <a href='#submit'>Click here</a> to
              upload one!
            </div>
          )}
        </div>
      </div>

      <div className='strategy__category strategy__other'>
        <h2>Other</h2>
        <div className='strategy__other-cards'>
          {guideTypes.other.map(({ _id, name, source, type }) => {
            return <Card key={_id} name={name} source={source} type={type} node={node} />;
          })}
          {guideTypes.other.length === 0 && (
            <div>
              Looks like there aren't any other guides yet. <a href='#submit'>Click here</a> to
              upload one!
            </div>
          )}
        </div>
      </div>

      <div className='dim hide' ref={node}></div>
    </div>
  );
};

export default Strategy;
