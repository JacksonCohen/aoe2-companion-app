import React, { useEffect, useState } from 'react';
import gameIcons from '../../../../data/icons';

import './_IconSelector.scss';

const IconSelector = ({ setSelectedIcon, selectedIcon, setIcon }: any) => {
  const [icons, setIcons] = useState<any>([]);
  const [active, setActive] = useState<number | null>(null);
  const [displayIcons, setDisplayIcons] = useState(false);

  useEffect(() => {
    const iconObjs = gameIcons.map((icon, index) => {
      return {
        id: index,
        src: icon,
      };
    });
    setIcons(iconObjs);
  }, []);

  const handleClick = (): void => {
    setDisplayIcons(!displayIcons);
  };

  const handleConfirm = (src: string): void => {
    setIcon(src);
    setActive(null);
    setDisplayIcons(false);
    setSelectedIcon(src);
  };

  return (
    <div className='build-order__icon-selector'>
      {selectedIcon && !displayIcons && <img className='icon' src={selectedIcon} />}
      {!displayIcons && <input type='button' onClick={handleClick} value='Select icon' />}
      {displayIcons && (
        <div className='icons'>
          {icons.map(({ id, src }: { id: number; src: string }) => {
            return (
              <img
                key={id}
                src={src}
                className={`icon${id === active ? ' active-icon' : ''}`}
                onClick={() => setActive(id)}
              />
            );
          })}

          <input
            type='button'
            onClick={() => (active ? handleConfirm(icons[active!].src) : null)}
            value='Confirm'
          />
        </div>
      )}
    </div>
  );
};

export default IconSelector;
